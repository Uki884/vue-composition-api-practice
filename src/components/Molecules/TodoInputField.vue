<template>
  <div class="common-input-fields">
      <BaseInput :value="inputTodo" @change="changTodoInput" />
      <BaseButton @click="submit()" text="追加" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  SetupContext
} from "@vue/composition-api";

import BaseButton from '@/components/Atoms/BaseButton.vue';
import BaseInput from '@/components/Atoms/BaseInput.vue';

type Props = {
  inputTodo: string;
};

export default defineComponent({
  props: {
    inputTodo: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  components: {
    BaseButton,
    BaseInput
  },
  setup(props: Props, context: SetupContext) {
    const changTodoInput = (input: String) => {
      console.log('発火');
      context.emit('change', input);
    };
    const submit = () => {
      // state.todos.push(state.inputTodo);
      // state.inputTodo = "";
    };
    return {
      submit,
      changTodoInput
    };
  }
})

</script>

<style lang="scss" scoped>
  .common-input-fields {
    display: flex;
    justify-content: center;
  }
</style>