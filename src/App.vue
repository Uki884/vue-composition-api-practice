<template>
  <div id="app">
    <Header/>
    <MainContent />
  </div>
</template>

<script lang="ts">

import {
  defineComponent,
  reactive,
  computed,
  SetupContext
} from "@vue/composition-api";

import MainContent from '@/components/Pages/MainContent.vue';
import Header from '@/components/Organisms/TheHeader.vue';

export default defineComponent({
  components: {
    MainContent,
    Header
  }
});
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: calc(100vh - 84px);
  overflow: hidden;
  background: #f9f4ef;
}
</style>
