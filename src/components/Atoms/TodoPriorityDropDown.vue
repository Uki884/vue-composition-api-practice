<template>
  <b-dropdown hoverable aria-role="list">
      <b-dropdown-item aria-role="listitem">なし</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">高</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">中</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">低</b-dropdown-item>
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