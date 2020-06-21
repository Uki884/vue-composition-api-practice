<template>
  <button class="tab__item" @click="updateValue(id)" :class="currentTab === id ? 'selected' : null" :style="`width:${tabWidth}%;`">
    {{ text }}
  </button>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  SetupContext,
  computed
} from "@vue/composition-api";

type Props = {
  text: string;
  selected: Boolean;
  currentTab: number;
  id: number;
  itemCount: number;
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
    },
    itemCount: {
      type: Number,
      default: null
    }
  },
  setup(props: Props, context: SetupContext) {
    const updateValue = (id: number) => {
      context.emit('input', id);
    }
    const tabWidth = computed(() =>{
        return 100 / props.itemCount
    });
    console.log(tabWidth);
    return {
      updateValue,
      tabWidth
    };
  }
})
</script>

<style lang="scss" scoped>
  .tab {
    // height: 50px;
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