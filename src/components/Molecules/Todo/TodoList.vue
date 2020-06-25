<template>
  <div v-if="todos.length" class="todo-list">
    <div class="todo-list__count" v-if="currentTab === 0">合計タスク: {{todosCount}}</div>
    <div class="todo-list__items__wrapper">
      <div class="todo-list__items" v-for="(item, index) in todos" :key="index">
        <BaseCheckBox :value="item.progress" @change="setProgress" color="green" />
        <TodoListItem :item="item" />
        <TodoPriorityButton :priority="item.priority" size="is-small" :width="36" />
        <BaseIcon icon="window-close" @click="deleteTodo(index)"/>
      </div>
    </div>
  </div>
  <div v-else class="todo-list todo-list__empty">
      <div>まだタスクが追加されていません</div>
      <div>なにかタスクを追加してみましょう</div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  SetupContext
} from "@vue/composition-api";

import TodoListItem from '@/components/Atoms/Todo/TodoListItem.vue';
import BaseCheckBox from '@/components/Atoms/BaseCheckBox.vue';
import TodoPriorityButton from '@/components/Atoms/Todo/TodoPriorityButton.vue';
import BaseIcon from '@/components/Atoms/BaseIcon.vue';

type Props = {
  label: string;
  value: string;
  todosCount: number;
  currentTab: number;
};

export default defineComponent({
  components: {
    TodoListItem,
    BaseCheckBox,
    BaseIcon,
    TodoPriorityButton
  },
  props: {
    todos: {
      type: Array,
      default: () => []
    },
    todosCount: {
      type: Number,
      default: 0
    },
    currentTab: {
      type: Number,
      default: 0
    }
  },
  setup(props: Props, context: SetupContext) {
    const setProgress = (index: number, status: boolean) => {
      context.emit('setProgress', index, status);
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
    padding: 24px;
    background: white;
  &__count{
    text-align: left;
    font-size: 12px;
    font-weight: bold;
  }
  &__items{
    &__wrapper {
      overflow: scroll;
      height: calc(100vh - 272px);
    }
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: start;
    border-bottom: solid 1px;
    padding: 12px;
  }
  &__empty {
    font-size: 16px;
  }
}


</style>