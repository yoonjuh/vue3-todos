<template>
  <li class="list-item">{{ todo.text }}</li>  
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { Todo } from "./TodoContainer.vue"
export default defineComponent( {
  name: "TodoItem",
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  }, 
  setup( props: { todo: Todo, } ) {
    return {
      ...props,
    } 
  },
} )
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