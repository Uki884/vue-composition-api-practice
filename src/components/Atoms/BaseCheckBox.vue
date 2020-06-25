<template>
  <!-- <b-checkbox v-model="inputValue" @click="submit()" :type="checkBoxColor" /> -->
  <div class="checkbox" @click.stop="updateValue()" :class="value ? 'checked' : 'unchecked'">
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  SetupContext,
  computed
} from "@vue/composition-api";

interface textObject {
    [key: string]: any;
}

const color: textObject = {
  black: 'is-dark',
  red: 'is-danger',
  yellow: 'is-warning',
  blue: 'is-info',
  green: 'is-success'
};

type Props = {
  value: boolean;
  color: string;
  index: number;
};

export default defineComponent({
  props: {
    value: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      default: 0
    }
  },
  setup(props: Props, context: SetupContext) {
    props.value;
    props.color;

    const updateValue = (e: Event) =>{
      context.emit('change', props.index, !props.value);
    }

    const checkBoxColor = computed(()=> {
      const key = props.color;
      return color[key];
    });

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
      inputValue,
      checkBoxColor
    };
  }
})
</script>

<style lang="scss" scoped>
    .checkbox {
      border: solid 3px white;
      box-shadow: 0 0 0 1px gray;
      margin-right: 6px;
      width: 22px;
      height: 18px;
      border-radius: 50%;
    }

    .checked {
      background: #00b1f4;
      box-shadow: 0 0 0 1px #00b1f4;
    }
    
</style>