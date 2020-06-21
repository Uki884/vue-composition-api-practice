<template>
  <button class="tab__item" @click="updateValue(id)" :class="currentTab === id ? 'selected' : null">
    {{ text }}
  </button>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  SetupContext,
} from "@vue/composition-api";

type Props = {
  text: string;
  selected: Boolean;
  currentTab: number;
  id: number;
};

export default defineComponent({
  components: {
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: null
    },
    currentTab: {
      type: Number,
      default: 0
    }
  },
  setup(props: Props, context: SetupContext) {
    const updateValue = (id: number) => {
      context.emit('input', id);
    }
    return {
      updateValue
    };
  }
})
</script>

<style lang="scss" scoped>
  .tab {
    height: 50px;
    &__item {
      cursor: pointer;
      padding: 12px;
      font-size: 12px;
      font-weight: bold;
      background: white;
      border-bottom: 3px solid #5ab4bd;
      border:none;
      &:focus {
        outline:0;
      }
    }
  }
  .selected {
    background: #5ab4bd;
    color: white;
  }
</style>