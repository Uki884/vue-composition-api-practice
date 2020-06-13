<template>
    <div class="todo-list__item" @click.stop="setProgress" :class="isDone ? 'is-done': null">
      {{item.todo}}
    </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  SetupContext
} from "@vue/composition-api";

type Props = {
  item: {
    todo: string,
    progress: boolean
  };
};

export default defineComponent({
  props: {
    item: {
      type: Object,
      default: null
    },
  },
  setup(props: Props, context: SetupContext) {
    props.item;
    const isDone = computed(()=>{
      if (props.item.progress) return true;
      return false;
    });

    const setProgress = () => {
      context.emit('click');
    }

    return {
      isDone,
      setProgress,
    };
  }
})

</script>

<style lang="scss" scoped>
.todo-list__item {
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
}
.is-done {
  text-decoration: line-through;
}
</style>