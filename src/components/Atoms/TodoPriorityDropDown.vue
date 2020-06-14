<template>
  <b-dropdown hoverable aria-role="list">
    <slot name="button" slot="trigger"></slot>
    <slot name="item"></slot>
  </b-dropdown>
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
    const submit = () =>{
      context.emit('click');
    }
    return {
      submit
    };
  }
})
</script>