<template>
  <div class="app-container">
    <sidebar /> 
    <div class="page-container"> 
      <search />
      <todo-container />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import Search from "./components/Search.vue"
import Sidebar from "./components/Sidebar.vue"
import TodoContainer from "./components/TodoContainer.vue"

export default defineComponent( {
  name: "App",
  components: {
    Search,
    Sidebar,
    TodoContainer,
  },
} )
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