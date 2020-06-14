<template>
  <div class="common-input">
    <span class="common-input__label">
      <slot name="label"></slot>
    </span>
    <b-input v-model="inputValue" />
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
    props.value;
    const updateValue = (e: Event) =>{
      context.emit('change', (e.target as HTMLInputElement).value);
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
      updateValue,
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
    font-size: 10px;
    position: absolute;
    top: -14px;
    width: 100%;
    left: 0;
  }
}
</style>