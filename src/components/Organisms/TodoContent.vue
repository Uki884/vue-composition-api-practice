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
    <BaseTab v-model="state.currentTab" :value="state.currentTab" :tabList="tabList" />
    <TodoList
      :todos="state.currentTab === 0 ? filterTodos : complatedTodos"
      :currentTab="state.currentTab"
      :todosCount="todosCount"
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

import TodoList from '@/components/Molecules/Todo/TodoList.vue';
import TodoInputField from '@/components/Molecules/Todo/TodoInputField.vue';
import BaseTab from '@/components/Molecules/BaseTab.vue';
import useTodo from '@/modules/Todo/index.ts';

interface TodoState {
  todos: string[];
  inputTodo: string;
}

export default defineComponent({
  components: {
    TodoInputField,
    TodoList,
    BaseTab
  },
  setup(props, context: SetupContext) {
    return {
      ...useTodo(context),
    };
  }
})
</script>

<style scoped lang="scss">

.todo-content {
  padding: 24px;
  margin: 0 auto;
  width: 500px;
  height: 100%;
  cursor: pointer;
}

</style>