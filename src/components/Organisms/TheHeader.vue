<template>
  <b-navbar type="is-dark" :fixed-top="true" :spaced="true">
    <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
            SimpleToDo
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/component_list' }">
            ComponentsList
        </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import {
  defineComponent,
  SetupContext,
  computed
} from "@vue/composition-api";

export default defineComponent({

})
</script>
<style lang="scss">


</style>