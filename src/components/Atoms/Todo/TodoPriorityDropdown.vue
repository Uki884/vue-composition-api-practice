<template>
  <b-dropdown hoverable aria-role="list">
    <PriorityButton :priority="priority" :width="55" slot="trigger">
        <template slot="label">
          優先度
        </template>
      </PriorityButton>
    <b-dropdown-item v-for="(dropdown, index) in dropdownList" :key="index" @click="click(dropdown.status)">
      {{ dropdown.text }}
    </b-dropdown-item>
  </b-dropdown>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  SetupContext
} from "@vue/composition-api";

import PriorityButton from '@/components/Atoms/Todo/TodoPriorityButton.vue';

type Props = {
  size: string;
  text: string;
  dropdownList: any[];
  priority: number
};

export default defineComponent({
  components: {
    PriorityButton
  },
  props: {
    size: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    dropdownList: {
      type: Array,
      default: () => []
    },
    priority: {
      type: Number,
      default: 0
    }
  },
  setup(props: Props, context: SetupContext) {
    const click = (status: number) =>{
      context.emit('click', status);
    }
    return {
      click
    };
  }
})
</script>