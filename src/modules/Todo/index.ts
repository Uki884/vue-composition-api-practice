import { reactive, SetupContext } from "@vue/composition-api";

interface TodoState {
  //配列の中に入るオブジェクトを定義
  todos: Array<{ todo: string, progress: boolean}>;
  inputTodo: string;
  priority: number
}

interface Todo {
  todo: string,
  progress: boolean
}

export default ( context: SetupContext) => {
  const state = reactive<TodoState>({
    todos: [],
    inputTodo: "",
    priority: 0
  });

  function addTodo() {
    if (!state.inputTodo.length) return;
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
    if (confirm('タスクを削除しますか？')) {
      state.todos.splice(index, 1);
    }
  }

  function selectPriority(priority: number) {
    console.log(priority);
    state.priority = priority;
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
    selectPriority,
    state,
  };
}
