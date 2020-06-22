import { reactive, SetupContext, computed } from "@vue/composition-api";
import { useStorage } from '@vueuse/core'

const tabList = [
  { text: "未完了", id: 0 },
  { text: "完了済み", id: 1 },
];


const priorityDropdownList = [ 
  { text: 'なし', status: 0 },
  { text: '高', status: 1 },
  { text: '中', status: 2 },
  { text: '低', status: 3 }
];

interface TodoState {
  //配列の中に入るオブジェクトを定義
  todos: Array<{ todo: string, progress: boolean, priority: number}>;
  complatedTodos: Array<{ todo: string, progress: boolean, priority: number}>;
  inputTodo: string;
  priority: number,
}

interface Todo {
  todo: string,
  progress: boolean,
  priority: number
}

export default (context: SetupContext) => {
  const state = useStorage<TodoState>(
    'Todos',{
    todos: [],
    complatedTodos: [],
    inputTodo: "",
    priority: 0
  });

  //タスク追加
  const addTodo = () => {
    if (!state.value.inputTodo.length) return;
    const item: Todo = {
      todo: state.value.inputTodo,
      progress: false,
      priority: state.value.priority,
    };
    state.value.todos.unshift(item);
    clearInput();
  }
  //タスク名input
  const setInputTodo = (item: string) => {
    state.value.inputTodo = item;
  };

  const clearInput = () => {
    state.value.inputTodo = '';
    state.value.priority = 0;
  }

  //完了ボタン
  const setProgress = (index: number) => {
    console.log(index);
    // state.todos[index].progress = !state.todos[index].progress;
    state.value.complatedTodos.push(state.value.todos[index]);
    state.value.todos.splice(index, 1);
  }
  //タスク削除
  const deleteTodo = (index: number) => {
    if (confirm('タスクを削除しますか？')) {
      state.value.todos.splice(index, 1);
    }
  }
  //優先度更新
  const updatePriority = (priority: number) => {
    state.value.priority = priority;
  }
  //親コンポーネントへpriorityを渡す
  const selectPriority = (priority: number) => {
    context.emit("selectPriority", priority);
  };
  //TODO タスクを優先度別にフィルターする
  const filterTodos = computed(() => {
    return state.value.todos.filter((item) => item.progress == false);
  });

  const todosCount = computed(() => {
    const filterTodos = state.value.todos.filter((item) => item.progress == false);
    return filterTodos.length;
  });

  const changeTodoInput = (item: string) => {
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
    todosCount,
    state,
    priorityDropdownList,
    tabList,
  };
}
