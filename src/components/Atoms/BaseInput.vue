<template>
  <div class="common-input">
    <span class="common-input__label">
      <slot name="label"></slot>
    </span>
    <b-input @keydown.native.enter="handleClick($event)" v-model="inputValue" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  SetupContext,
  computed
} from "@vue/composition-api";


type Props = {
  value: string;
};

export default defineComponent({
  props: {
    value: {
      type: String,
      default: ''
    },
  },
  setup(props: Props, context: SetupContext) {

    const handleClick = async(e: Event) =>{
      await context.emit('click');
    }
    const inputValue = computed({
      get: () => {
        return props.value
      },
      set: (val) => {
        context.emit('change', val)
      }
    });
    return {
      handleClick,
      inputValue
    };
  }
})
</script>

<style lang="scss" scoped>
.common-input {
  position: relative;
  width: 100%;
  &__label{
    font-weight: bold;
    font-size: 10px;
    position: absolute;
    top: -14px;
    width: 100%;
    left: 0;
  }
}
</style>