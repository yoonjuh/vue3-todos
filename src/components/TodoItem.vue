<template>
  <li class="list-item">{{ todo.text }}</li>  
</template>

<script lang="ts">
import { PropType } from "vue"
import { Todo } from "./TodoContainer.vue"
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object as PropType<Todo>,
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
    border: 1px purple solid;
    list-style: none;
    min-height: 30px;
  }
</style>