<template>
  <li class="list-item">{{ todo.text }}</li>  
</template>

<script lang="ts">
import { PropType } from "vue"
import { TodoStore } from "../store/todos"

export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object as PropType<TodoStore.Todo>,
      required: true,
    },
  }, 
  setup( props ) {
    return {
      ...props,
    } 
  },
}
</script>

<style scoped>
.list-item {
  align-items: center;
  border: 1px purple solid;
  display: flex;
  font-size: 20px;
  list-style: none;
  min-height: 50px;
  padding: 10px 20px;
}
</style>