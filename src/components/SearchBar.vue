<template>
  <div class="search-bar-wrapper">
    <input v-model="keyword"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
interface States {
  keyword: string
}
export default defineComponent<{}, {}, States>( {
  name: "SearchBar",
  data() {
    return {
      keyword: "Search by keyword",
    } 
  },
} )
</script>

<style scoped>
.search-bar-wrapper {
  border: 1px solid red;
  display: flex;
  min-height: 60px;
}

input {
  padding: 0px 20px;
  flex: 1;
  font-size: 20px;
}
</style>