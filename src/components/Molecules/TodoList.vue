<template>
  <div class="todo-list">
    <div class="todo-list__items" v-for="(item, index) in todos" :key="index">
      <BaseCheckBox :value="item.progress" @change="setProgress(index)" type="is-success" />
      <TodoListItem :item="item" @click="setProgress(index)" />
      <BaseIcon icon="window-close" @click="deleteTodo(index)"/>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  SetupContext
} from "@vue/composition-api";

import TodoListItem from '@/components/Atoms/TodoListItem.vue';
import BaseCheckBox from '@/components/Atoms/BaseCheckBox.vue';
import BaseIcon from '@/components/Atoms/BaseIcon.vue';
import TodoModule from '@/modules/Todo/index.ts';

type Props = {
  label: string;
  value: string;
};

export default defineComponent({
  components: {
    TodoListItem,
    BaseCheckBox,
    BaseIcon
  },
  props: {
    todos: {
      type: Array,
      default: () => []
    },
  },
  setup(props: Props, context: SetupContext) {
    const setProgress = (index: number) => {
      context.emit('setProgress', index);
    }
    const deleteTodo = (index: number) => {
      context.emit('deleteTodo', index);
    }
    return {
      setProgress,
      deleteTodo
    }
  }
})

</script>

<style lang="scss" scoped>
.todo-list{
  &__items{
    display: flex;
    justify-content: start;
    border-bottom: solid 1px;
    padding: 12px;
  }
}


</style>