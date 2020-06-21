<template>
  <Datepicker v-model="state.date" :format="state.DatePickerFormat" :language="state.ja">
  </Datepicker>
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
        date: dayjs().format('YYYY-MM-DD'),
        DatePickerFormat: 'yyyy-MM-dd',
        ja: ja,
    });
    console.log('date', state, dayjs().format('YYYY-MM-DD'));
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