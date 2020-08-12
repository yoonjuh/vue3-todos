<template>
  <div class="sidebar-container">This is the sidebar</div> 
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent( {
  name: "Sidebar",
} )
</script>

<style scoped>
.sidebar-container {
  border: 1px red solid;
  min-width: 250px;
  padding: 10px;
}
</style>