<template>
  <div class="app-container">
    <sidebar /> 
    <todo-container />
  </div>
</template>

<script lang="ts">
import Sidebar from "./components/Sidebar.vue"
import TodoContainer from "./components/TodoContainer.vue"

export default {
  name: "App",
  components: {
    Sidebar,
    TodoContainer,
  },
}
</script>

<style scoped>
.app-container {
  height: 100%;
  display: flex;
}
</style>