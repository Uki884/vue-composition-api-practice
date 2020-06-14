<template>
  <div class="todo-content">
    <TodoInputField
      :inputTodo="state.inputTodo"
      @change="setInputTodo"
      @addTodo="addTodo"
      @selectPriority="updatePriority"
      :priority="state.priority"
      label="タスク"
    />
    <TodoList
      :todos="state.todos"
      @setProgress="setProgress"
      @deleteTodo="deleteTodo"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  SetupContext
} from "@vue/composition-api";

import TodoList from '@/components/Molecules/TodoList.vue';
import TodoInputField from '@/components/Molecules/TodoInputField.vue';
import TodoModule from '@/modules/Todo/index.ts';

interface TodoState {
  todos: string[];
  inputTodo: string;
}

export default defineComponent({
  components: {
    TodoInputField,
    TodoList
  },
  setup(props, context: SetupContext) {
    const todoModule = TodoModule(context);
    return {
      ...todoModule,
    };
  }
})
</script>

<style scoped lang="scss">

.todo-content {
  padding: 24px;
  margin: 0 auto;
  width: 500px;
  cursor: pointer;
}

</style>