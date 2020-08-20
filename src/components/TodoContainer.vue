<template>
  <div class="todo-container">
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
  </div>
</template>

<script lang="ts">
import TodoItem from "./TodoItem.vue"
import useTodos from "../store/todos"

export default {
  name: "TodoContainer",
  components: {
    TodoItem,
  },
  async setup() {
    const { todos, fetchTodos } = useTodos()
    await fetchTodos()

    return {
      todos,
    }
  },
}
</script>

<style scoped>
.todo-container {
  /* border: 1px lightgreen solid; */
  color: #42b883;
  display: flex;
  flex: 1;
  flex-direction: column;
}
</style>