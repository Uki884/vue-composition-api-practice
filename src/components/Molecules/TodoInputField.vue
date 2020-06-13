<template>
  <div class="common-input-fields">
      <BaseInput :value="inputTodo" @change="changeTodoInput" />
      <BaseButton @click="addTodo" text="追加" />
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
import TodoModule from '@/modules/Todo/index.ts';

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
    const changeTodoInput = (input: String) => {
      context.emit('change', input);
    };
    const addTodo = ()=> {
        context.emit('addTodo');
    };
    return {
      changeTodoInput,
      addTodo
    };
  }
})

</script>

<style lang="scss" scoped>
  .common-input-fields {
    display: flex;
    justify-content: center;
  }
  .control {
    flex: 1;
  }
</style>