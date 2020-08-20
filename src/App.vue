<template>
  <div class="app-container">
    <div class="page-container"> 
      <search />
      <Suspense>
        <template #default>
          <todo-container />
        </template>
        <template #fallback>
          <div class="loader-wrapper">
            <div class="loader">
              loading...
            </div>
          </div>
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

  padding: 30px;  
}

.loader-wrapper {
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #35495e;
}

.loader {
  font-size: 32px;
  color: #1CBC9B;
}
</style>