<template>
    <div class="todo-list__item">タスク一覧</div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  SetupContext
} from "@vue/composition-api";

type Props = {
  text: string;
};

export default defineComponent({
  props: {
    text: {
      type: String,
      default: ''
    },
  },
  setup(props: Props, context: SetupContext) {
    props.text;
  }
})

</script>

<style lang="scss" scoped>

</style>