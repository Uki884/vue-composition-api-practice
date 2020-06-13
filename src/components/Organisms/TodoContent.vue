<template>
  <div class="task-content">
    <TodoInputField :inputTodo="state.inputTodo" @change="changeTodoInput" label="タスク" />
    <TodoListItem />
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
import TodoInputField from '@/components/Molecules/TodoInputField.vue';

interface TodoState {
  todos: string[];
  inputTodo: string;
}

type Props = {
  label: string;
  value: string;
};

export default defineComponent({
  components: {
    TodoInputField,
    TodoListItem
  },
  setup(props: Props, context: SetupContext) {
    const state = reactive<TodoState>({
      todos: [] as string[],
      inputTodo: ""
    });
    const submit = () => {
      state.todos.push(state.inputTodo);
      state.inputTodo = "";
    };
    const changeTodoInput = (input: string) => {
      state.inputTodo = input;
      console.log(state);
    };
    return {
      state,
      submit,
      changeTodoInput
    };
  }
})
</script>

<style scoped lang="scss">


</style>