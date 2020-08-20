<template>
  <div class="app-container">
    <div class="page-container"> 
      <search />
      <Suspense>
        <template #default>
          <todo-container />
        </template>
        <template #fallback>
          <div>loading...</div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import Search from "./components/Search.vue"
import TodoContainer from "./components/TodoContainer.vue"

export default defineComponent( {
  name: "App",
  components: {
    Search,
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