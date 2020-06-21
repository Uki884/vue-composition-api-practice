import { reactive, SetupContext, computed } from "@vue/composition-api";


interface State {
  //配列の中に入るオブジェクトを定義
  todos: Array<{ todo: string, progress: boolean, priority: number}>;
  inputTodo: string;
  priority: number,
}

  const dropdownList = [
    { text: "なし", status: 0 },
    { text: "高", status: 1 },
    { text: "中", status: 2 },
    { text: "低", status: 3 },
  ];

const tabList = [
  { text: "タブ1", id: 0 },
  { text: "タブ2", id: 1 },
];

export default (context: SetupContext) => {
    const state = reactive<State>({
      todos: [],
      inputTodo: "",
      priority: 0,
    });

  return {
    state,
    dropdownList,
    tabList,
  };

}