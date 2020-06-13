<template>
  <div>
    <BaseInput v-model="state.inputTodo" label="タスク名" :value="state.inputTodo" />
    <BaseButton text="追加" @click="submit()" />
    <div>
      todo一覧:
      <div v-for="(todo, index) in state.todos" :key="index">
        <p>{{todo}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BaseButton from '@/components/Atoms/BaseButton.vue';
import BaseInput from '@/components/Atoms/BaseInput.vue';
import {
  defineComponent,
  reactive
} from "@vue/composition-api";

interface TodoState {
  todos: string[];
  inputTodo: string;
}

export default defineComponent({
  name: "TodoList",
  components: {
    BaseButton,
    BaseInput
  },
  setup() {
    const state = reactive<TodoState>({
      todos: [] as string[],
      inputTodo: ""
    });

    const submit = () => {
      state.todos.push(state.inputTodo);
      state.inputTodo = "";
    };

    return {
      state,
      submit
    };
  }
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
