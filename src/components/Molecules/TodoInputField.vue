<template>
  <div class="common-input-fields">
      <BaseInput :value="inputTodo" @change="changeTodoInput" />
      <TodoPriority :priority="priority" @selectPriority="selectPriority" />
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

import TodoPriority from '@/components/Molecules/TodoPriority.vue';
import TodoModule from '@/modules/Todo/index.ts';

type Props = {
  inputTodo: string;
  priority: number
};

export default defineComponent({
  components: {
    BaseButton,
    BaseInput,
    BaseCalendar,
    TodoPriority
  },
  props: {
    inputTodo: {
      type: String,
      default: ''
    },
    priority: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ''
    }
  },
  setup(props: Props, context: SetupContext) {
    const todoModule = TodoModule(context);
    const addTodo = ()=> {
        context.emit('addTodo');
    };
    return {
      ...todoModule,
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