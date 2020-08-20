<template>
  <li class="list-item" @click="toggle">
    <div class="checkbox-wrapper" :class="todo.completed ? 'completed' : ''">
      <i v-if="todo.completed" class="fas fa-check" :class="todo.completed ? '' : 'checked-icon'"></i>
      <i v-else class="i-placeholder"> </i>
    </div>
    <div>{{ todo.text }}</div>
  </li>  
</template>

<script lang="ts">
import { PropType } from "vue"
import useTodos, { TodoStore } from "../store/todos"

export default {
  name: "TodoItem",
  props: {
    todo: {
      required: true,
      type: Object as PropType<TodoStore.Todo>,
    },
  }, 
  setup( props ) {
    const { updateTodo } = useTodos()

    return {
      updateTodo,
      ...props,
    } 
  },
  methods: {
    toggle() { 
      this.updateTodo( this.todo )
    },
  },
}
</script>

<style scoped>
.list-item {
  align-items: center;
  background-color:#35495e;
  display: flex;
  font-size: 20px;
  list-style: none;
  min-height: 50px;
  padding: 10px 20px;

}
.list-item:hover {
  background-color: #2C3F4F;  
}

.checkbox-wrapper {
  align-items: center;
  background-color: white;
  border-radius: 200px;
  display: flex;
  justify-content: center;
  margin-right: 15px;
  max-height: 45px;
  min-width: 25px;
}

i {
  color: #34495E;
  margin-top: 3px;
  width: 20px;
}

.i-placeholder {
  min-height: 19px;
}

.completed {
  background-color: #1CBC9B;
}
</style>