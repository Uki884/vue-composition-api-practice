<template>
  <Datepicker :format="state.DatePickerFormat" :language="state.ja" :calendar-button="true"></Datepicker>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  SetupContext
} from "@vue/composition-api";

import Datepicker from "vuejs-datepicker";
import {ja} from 'vuejs-datepicker/dist/locale'
import dayjs from 'dayjs';
dayjs.locale('ja');

type Props = {
  icon: string;
};

export default defineComponent({
  components: {
    Datepicker
  },
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  setup(props: Props, context: SetupContext) {
    const state = reactive({
        date: dayjs().format('yyyy-MM-dd'),
        DatePickerFormat: 'yyyy-MM-dd',
        ja: ja
    });
    console.log(state);
    const submit = () =>{
      context.emit('click');
    }
    return {
      submit,
      state
    };
  }
})
</script>