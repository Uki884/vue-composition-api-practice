<template>
  <div class="main-content">
      <todo-content></todo-content>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  SetupContext
} from "@vue/composition-api";

import TodoContent from '@/components/Organisms/TodoContent.vue';

export default defineComponent({
  components: {
    TodoContent
  },
})

</script>

<style scoped lang="scss">
.main-content {
    height: 100vh;
}
</style>