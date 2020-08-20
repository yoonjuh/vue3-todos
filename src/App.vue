<template>
  <div class="app-container">
    <div class="page-container"> 
      <AddInput />
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

import AddInput from "./components/AddInput.vue"
import TodoContainer from "./components/TodoContainer.vue"

export default defineComponent( {
  name: "App",
  components: {
    AddInput,
    TodoContainer,
  },
} )
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100%;
}

.page-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 30px;  
}

.loader-wrapper {
  align-items: center;
  background-color: #35495e;
  display: flex;
  justify-content: center;
  min-height: 300px;
}

.loader {
  color: #1CBC9B;
  font-size: 32px;
}
</style>