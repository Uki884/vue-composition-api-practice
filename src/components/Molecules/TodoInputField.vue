<template>
  <div class="common-input-fields">
      <TodoPriority :priority="priority" @selectPriority="selectPriority" />
      <BaseInput :value="inputTodo" @change="changeTodoInput" @click="emitTodo">
        <template slot="label">タスク名</template>
      </BaseInput>
      <BaseButton @click="emitTodo" text="追加" />
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
    const emitTodo = ()=> {
        context.emit('addTodo');
    };
    return {
      ...todoModule,
      emitTodo
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