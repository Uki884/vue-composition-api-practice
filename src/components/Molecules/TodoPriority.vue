<template>
  <priorityDropdown >
    <template slot="button">
      <PriorityButton :priority="priority">
        <template slot="label">
          優先度
        </template>
      </PriorityButton>
    </template>
    <template slot="item">
      <b-dropdown-item aria-role="listitem" @click="selectPriority(0)">なし</b-dropdown-item>
      <b-dropdown-item aria-role="listitem" @click="selectPriority(1)">高</b-dropdown-item>
      <b-dropdown-item aria-role="listitem" @click="selectPriority(2)">中</b-dropdown-item>
      <b-dropdown-item aria-role="listitem" @click="selectPriority(3)">低</b-dropdown-item>
    </template>
  </priorityDropdown>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  SetupContext,
  computed
} from "@vue/composition-api";
import PriorityButton from '@/components/Atoms/TodoPriorityButton.vue';
import priorityDropdown from '@/components/Atoms/TodoPriorityDropdown.vue';
import TodoModule from '@/modules/Todo/index.ts';

type Props = {
  priority: number;
};

export default defineComponent({
  components: {
    PriorityButton,
    priorityDropdown
  },
  props: {
    priority: {
      type: Number,
      default: 0
    }
  },
  setup(props: Props, context: SetupContext) {
    const todoModule = TodoModule(context);
    return {
      ...todoModule
    };
  }
})
</script>

<style scoped lang="scss">

</style>