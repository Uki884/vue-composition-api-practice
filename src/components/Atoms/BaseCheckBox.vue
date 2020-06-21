<template>
  <b-checkbox v-model="inputValue" @click="submit()" :type="checkBoxColor" />
</template>

<script lang="ts">
import {
  defineComponent,
  SetupContext,
  computed
} from "@vue/composition-api";

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

type Props = {
  value: boolean;
  color: string
};

export default defineComponent({
  props: {
    value: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    }
  },
  setup(props: Props, context: SetupContext) {
    props.value;
    props.color;

    const updateValue = (e: Event) =>{
      context.emit('change', (e.target as HTMLInputElement).value);
    }

    const checkBoxColor = computed(()=> {
      const key = props.color;
      return color[key];
    });

    const inputValue = computed({
      get: () => {
        return props.value
      },
      set: (val) => {
        context.emit('change', val)
      }
    });

    return {
      updateValue,
      inputValue,
      checkBoxColor
    };
  }
})
</script>