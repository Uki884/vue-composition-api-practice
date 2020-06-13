import { reactive, SetupContext } from "@vue/composition-api";

interface TodoState {
  todos: Array<{ todo: string, progress: boolean}>;
  inputTodo: string;
}

interface Todo {
  todo: string,
  progress: boolean
}

export default ( context: SetupContext) => {
  const state = reactive<TodoState>({
    todos: [],
    inputTodo: "",
  });

  function addTodo() {
    const item: Todo = { todo: state.inputTodo, progress: false };

    state.todos.unshift(item);
    state.inputTodo = '';
  }

  function setInputTodo(item: string) {
    state.inputTodo = item;
  };

  function setProgress(index: number) {
    state.todos[index].progress = !state.todos[index].progress;
  }

  function deleteTodo(index: number) {
    state.todos.splice(index, 1);
  }

  function changeTodoInput(item: string) {
    context.emit("change", item);
  }

  return {
    setInputTodo,
    changeTodoInput,
    setProgress,
    deleteTodo,
    addTodo,
    state,
  };
}
