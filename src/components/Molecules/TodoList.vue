<template>
  <div class="todo-list">
    <div class="todo-list__items">
      <TodoListItem text="タスク" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  SetupContext
} from "@vue/composition-api";

import TodoListItem from '@/components/Atoms/TaskListItem.vue';

type Props = {
  label: string;
  value: string;
};

export default defineComponent({
  props: {
    todos: {
      type: String,
      default: ''
    },
  },
  components: {
    TodoListItem
  },
  setup(props: Props, context: SetupContext) {
  }
})

</script>

<style lang="scss" scoped>
.todo-list{
  &__items{

  }
}


</style>