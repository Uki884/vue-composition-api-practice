<template>
  <b-checkbox v-model="inputValue" @click="submit()" :type="type" />
</template>

<script lang="ts">
import {
  defineComponent,
  SetupContext,
  computed
} from "@vue/composition-api";


type Props = {
  value: boolean;
  type: string
};

export default defineComponent({
  props: {
    value: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    }
  },
  setup(props: Props, context: SetupContext) {
    props.value;
    props.type;

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