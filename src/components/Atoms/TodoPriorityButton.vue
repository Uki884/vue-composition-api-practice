<template>
  <b-button @click="submit()" :type="color" :size="size" :rounded="rounded" class="priority__button">
    {{ text }}
  </b-button>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  SetupContext,
  computed
} from "@vue/composition-api";

interface priorityTextObject {
    // 今回はstring
    [key: string]: any;
}

type Props = {
  priority: number;
  size: string;
  rounded: boolean;
};

const priorityText: priorityTextObject = {
  0: 'なし',
  1: '高',
  2: '中',
  3: '低'
};

const priorityColor: priorityTextObject = {
  0: 'is-dark',
  1: 'is-danger',
  2: 'is-warning',
  3: 'is-info'
};

export default defineComponent({
  props: {
    priority: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: ''
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  setup(props: Props, context: SetupContext) {
    const text = computed(()=> {
      const key = props.priority;
      return priorityText[key];
    });
    const color = computed(()=> {
      const key = props.priority;
      return priorityColor[key];
    });
    const submit = () =>{
      context.emit('click');
    }
    return {
      submit,
      text,
      color
    };
  }
})
</script>

<style scoped lang="scss">
.priority{
  &__button {
    width: 55px;
    margin: 0 2px;
  }
}

</style>