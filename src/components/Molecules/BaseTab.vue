<template>
  <div class="tab">
    <div class="tab__items">
      <BaseTabItem v-for="(tab, index) in tabList"
        v-model="state.currentTab"
        :currentTab="state.currentTab"
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
  SetupContext
} from "@vue/composition-api";

import BaseTabItem from '@/components/Atoms/BaseTabItem.vue';

type Props = {
  size: string;
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
  },
  setup(props: Props, context: SetupContext) {

    const state = reactive<State>({
      currentTab: 0,
    });
    return {
      state,
    };
  }
})
</script>

<style lang="scss" scoped>
  .tab {
    &__items {
      display: flex;
      margin-top: 24px;
    }
    .selected {
      background: #5ab4bd;
    }
  }
</style>