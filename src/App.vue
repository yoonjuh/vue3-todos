<template>
  <div class="app-container">
    <sidebar /> 
    <div class="page-container"> 
      <search-bar />
      <todo-container />
    </div>
  </div>
</template>

<script lang="ts">
import SearchBar from "./components/SearchBar.vue"
import Sidebar from "./components/Sidebar.vue"
import TodoContainer from "./components/TodoContainer.vue"

export default {
  name: "App",
  components: {
    SearchBar,
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

.page-container {
  display: flex;
  flex: 1;
  flex-direction: column;
}
</style>