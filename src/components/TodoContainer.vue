<template>
  <div class="todo-container">
    <todo-item v-for="todo in todos" :key="todo.id" :todo="todo"/>
  </div>
</template>

<script lang="ts">
import TodoItem from "./TodoItem.vue"

export interface Todo {
  completed: boolean
  id: string
  text: string
}

export default {
  name: "TodoContainer",
  components: {
    TodoItem,
  },
  data() {
    return {
      todos: [
        {
          id: "1",
          text: "hello",
          completed: false,
        },
        {
          id: "2",
          text: "hello2",
          completed: false,
        },
        {
          id: "3",
          text: "hellor3",
          completed: false,
        },
        {
          id: "4",
          text: "hello4",
          completed: false,
        },
      ] as Todo[],
    }
  },
}
</script>

<style scoped>
.todo-container {
  border: 1px blue solid;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
}
</style>