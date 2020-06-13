<template>
  <b-icon :icon="icon" @click.native="submit" />
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  SetupContext
} from "@vue/composition-api";


type Props = {
  icon: string;
};

export default defineComponent({
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  setup(props: Props, context: SetupContext) {
    props.icon; //string型として型推論される
    console.log(props);
    const submit = () =>{
      context.emit('click');
    }
    return {
      submit
    };
  }
})
</script>