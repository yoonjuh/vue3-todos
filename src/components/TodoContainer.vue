<template>
  <div class="todo-container">
    <todo-item v-for="todo in todos" :key="todo.id" :todo="todo"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import TodoItem from "./TodoItem.vue"
import { useTodo } from "../store/todos"

export default defineComponent( {
  name: "TodoContainer",
  components: {
    TodoItem,
  },
  setup() {
    const { todos, fetchTodos } = useTodo()
    fetchTodos()

    return {
      todos,
    }
  },
} )
</script>

<style scoped>
.todo-container {
  border: 1px blue solid;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 50px 30px;
}
</style>