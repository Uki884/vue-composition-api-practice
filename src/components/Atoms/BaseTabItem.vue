<template>

</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  SetupContext
} from "@vue/composition-api";

type Props = {
  size: string;
};

export default defineComponent({
  components: {
  },
  props: {
    size: {
      type: String,
      default: ''
    },
  },
  setup(props: Props, context: SetupContext) {
    return {

    };
  }
})
</script>