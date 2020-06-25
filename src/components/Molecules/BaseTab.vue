<template>
  <div class="tab">
    <div class="tab__items">
      <BaseTabItem v-for="(tab, index) in tabList"
        v-model="inputValue"
        :currentTab="inputValue"
        :key="index"
        :text="tab.text"
        :id="tab.id"
        :itemCount="tabList.length"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  SetupContext,
  computed
} from "@vue/composition-api";

import BaseTabItem from '@/components/Atoms/BaseTabItem.vue';

type Props = {
  size: string;
  currentTab: number;
  value: number;
};

interface State {
  currentTab: number,
}

export default defineComponent({
  components: {
    BaseTabItem
  },
  props: {
    tabList: {
      type: Array,
      default: () => []
    },
    value: {
      type: Number,
      default: 0
    },
    currentTab: {
      type: Number,
      default: 0
    }
  },
  setup(props: Props, context: SetupContext) {
      const inputValue = computed({
      get: () => {
        return props.value
      },
      set: (val) => {
        context.emit('input', val)
      }
    });
    return {inputValue}
  }
})
</script>

<style lang="scss" scoped>
  .tab {
    &__items {
      display: flex;
      margin-top: 24px;
      border-bottom: solid 1px;
    }
    .selected {
      background: #5ab4bd;
    }
  }
</style>