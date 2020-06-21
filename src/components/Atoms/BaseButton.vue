<template>
  <b-button :size="size" :type="buttonColor" @click="submit()">{{text}}</b-button>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  SetupContext,
  computed
} from "@vue/composition-api";


type Props = {
  size: string;
  text: string;
  color: string;
};


interface textObject {
    [key: string]: any;
}

const color: textObject = {
  black: 'is-dark',
  red: 'is-danger',
  yellow: 'is-warning',
  blue: 'is-info',
  green: 'is-success'
};

export default defineComponent({
  props: {
    size: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  setup(props: Props, context: SetupContext) {
    props.size; //string型として型推論される
    props.text;
    const submit = () =>{
      context.emit('click');
    }
    const buttonColor = computed(()=> {
      const key = props.color;
      return color[key];
    });
    return {
      submit,
      buttonColor
    };
  }
})
</script>