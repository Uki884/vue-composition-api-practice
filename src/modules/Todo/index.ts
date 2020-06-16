import { reactive, SetupContext, computed } from "@vue/composition-api";

interface TodoState {
  //配列の中に入るオブジェクトを定義
  todos: Array<{ todo: string, progress: boolean, priority: number}>;
  inputTodo: string;
  priority: number,
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
  const addTodo = () => {
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
  const setInputTodo = (item: string) => {
    state.inputTodo = item;
  };

  const clearInput = () => {
    state.inputTodo = '';
  }

  //完了ボタン
  const setProgress = (index: number) => {
    state.todos[index].progress = !state.todos[index].progress;
  }
  //タスク削除
  const deleteTodo = (index: number) => {
    if (confirm('タスクを削除しますか？')) {
      state.todos.splice(index, 1);
    }
  }
  //優先度更新
  const updatePriority = (priority: number) => {
    state.priority = priority;
  }
  //親コンポーネントへpriorityを渡す
  const selectPriority = (priority: number) => {
    context.emit("selectPriority", priority);
  };
  //TODO タスクを優先度別にフィルターする
  const filterTodos = computed(() => {
    return state.todos;
  });

  const todosCount = computed(() => {
    const filterTodos = state.todos.filter((item) => item.progress == false);
    return filterTodos.length;
  });

  const changeTodoInput = (item: string) => {
    context.emit("change", item);
  }

  const priorityDropdownList = [ 
    { text: 'なし', status: 0 },
    { text: '高', status: 1 },
    { text: '中', status: 2 },
    { text: '低', status: 3 }
  ];

  return {
    setInputTodo,
    changeTodoInput,
    setProgress,
    deleteTodo,
    addTodo,
    updatePriority,
    selectPriority,
    filterTodos,
    todosCount,
    state,
    priorityDropdownList
  };
}
