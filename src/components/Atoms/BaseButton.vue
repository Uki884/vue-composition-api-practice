<template>
  <b-button :size="size" @click="submit()">{{text}}</b-button>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  SetupContext
} from "@vue/composition-api";


type Props = {
  size: string;
  text: string;
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
    }
  },
  setup(props: Props, context: SetupContext) {
    props.size; //string型として型推論される
    props.text;
    const submit = () =>{
      context.emit('click');
    }
    return {
      submit
    };
  }
})
</script>