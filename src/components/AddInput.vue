<template>
  <div class="add-input-wrapper">
    <input v-model="keyword" @keyup.enter="add" placeholder="Search by keyword"/>
    <div class="icon-wrapper">
      <i class="fas fa-plus" @click="add"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import useTodos from "../store/todos"

export default defineComponent( {
  name: "AddInput",
  setup() {
    const { addTodo } = useTodos()
    const keyword = ref( "" )

    return {
      addTodo,
      keyword,
    } 
  },
  methods: {
    add() {
      if( this.keyword ) {
        this.addTodo( this.keyword )
        this.keyword = ""
      }
    },
  },
} )
</script>

<style scoped>
.add-input-wrapper {
  background-color: #1CBC9B;
  display: flex;
  min-height: 60px;
}

input {
  border: none;
  background-color: transparent;
  flex: 1;
  font-size: 20px;
  outline: none;
  padding: 0px 20px;
}

::placeholder {
  color:#35495e;
}

.icon-wrapper {
  align-items: center;
  display: flex;
  justify-content: center;
  min-width: 50px;
}

.icon-wrapper > i {
  transition: ease-out 0.3s;
}

.icon-wrapper > i:hover {
  transform: scale( 1.5 );
  transition: ease-in 0.2s;
}
</style>