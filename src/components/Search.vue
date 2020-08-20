<template>
  <div class="search-bar-wrapper">
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
  name: "Search",
  setup() {
    const { addTodo } = useTodos()
    const keyword = ref( "" )

    // watch( keyword, ( current ) => {
    //   searchTodoByKeyword( current )
    // } )

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
.search-bar-wrapper {
  background-color: #1CBC9B;
  display: flex;
  min-height: 60px;
}

input {
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0px 20px;
  flex: 1;
  font-size: 20px;
}

::placeholder {
  color:#35495e;
}

.icon-wrapper {
  min-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-wrapper > i {
  transition: ease-out 0.3s;
}

.icon-wrapper > i:hover {
  transform: scale( 1.5 );
  transition: ease-in 0.2s;
}
</style>