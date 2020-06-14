import { reactive, SetupContext, computed } from "@vue/composition-api";

interface TodoState {
  //配列の中に入るオブジェクトを定義
  todos: Array<{ todo: string, progress: boolean, priority: number}>;
  inputTodo: string;
  priority: number
}

interface Todo {
  todo: string,
  progress: boolean,
  priority: number
}

export default (context: SetupContext) => {
  const state = reactive<TodoState>({
    todos: [],
    inputTodo: "",
    priority: 0
  });

  //タスク追加
  function addTodo() {
    if (!state.inputTodo.length) return;
    const item: Todo = {
      todo: state.inputTodo,
      progress: false,
      priority: state.priority,
    };
    state.todos.unshift(item);
    clearInput();
  }
  //タスク名input
  function setInputTodo(item: string) {
    state.inputTodo = item;
  };

  function clearInput() {
    state.inputTodo = '';
  }

  //完了ボタン
  function setProgress(index: number) {
    state.todos[index].progress = !state.todos[index].progress;
  }
  //タスク削除
  function deleteTodo(index: number) {
    if (confirm('タスクを削除しますか？')) {
      state.todos.splice(index, 1);
    }
  }
  //優先度更新
  function updatePriority(priority: number) {
    state.priority = priority;
  }
  //親コンポーネントへpriorityを渡す
  function selectPriority(priority: number) {
    context.emit("selectPriority", priority);
  };
  //TODO タスクを優先度別にフィルターする
  const filterTodos = computed(() => {
    return state.todos;
  });
  function changeTodoInput(item: string) {
    context.emit("change", item);
  }

  return {
    setInputTodo,
    changeTodoInput,
    setProgress,
    deleteTodo,
    addTodo,
    updatePriority,
    selectPriority,
    filterTodos,
    state,
  };
}
