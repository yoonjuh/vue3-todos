import { computed, ref, reactive } from "vue"

export interface Todo {
  completed: boolean
  id: string
  text: string
}

export const useTodo =  () => {
  const state = reactive<{ todos: Todo[] }>( {
    todos: [],
  } )
  const loading = ref( false )

  const searchByKeyword = ( keyword: string ) => {
    console.log( "searchByKeyword" )
  }

  const fetchTodos = async () => {
    loading.value = true
    state.todos = await new Promise( ( resolve ) => {
      setTimeout( () => {
        return resolve( [
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
        ] )
      }, 500 )
    } )

    loading.value = false
  }

  const addTodo = ( todo: Todo ) => {
    state.todos.push( todo )
  }

  const deleteTodo = ( todoId: string ) => {
    state.todos = state.todos.filter( ( todo ) => todo.id !== todoId )
  }

  return {
    addTodo,
    deleteTodo,
    fetchTodos,
    loading: computed( () => loading.value ),
    searchByKeyword,
    todos: computed( () => state.todos ),
  }
}