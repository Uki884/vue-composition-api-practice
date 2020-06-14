<template>
  <div class="common-input-fields">
      <BaseInput :value="inputTodo" @change="changeTodoInput" />
      <TodoPriorityButton priority="3" />
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
import BaseCalendar from '@/components/Atoms/BaseCalendar.vue';

// import TodoPriority from '@/components/Molecules/TodoPriority.vue';
import TodoPriorityButton from '@/components/Atoms/TodoPriorityButton.vue';
import TodoModule from '@/modules/Todo/index.ts';

type Props = {
  inputTodo: string;
};

export default defineComponent({
  components: {
    BaseButton,
    BaseInput,
    BaseCalendar,
    TodoPriorityButton
    // TodoPriority
  },
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