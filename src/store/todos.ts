import { computed, ref, reactive, ComputedRef, toRefs, Ref } from "vue"

export namespace TodoStore {
  export interface UseTodoHook {
    loading: ComputedRef<boolean>
    todos: Ref<Todo[]>

    addTodo: ( keyword: string ) => void
    deleteTodo: ( todoId: string ) => void
    fetchTodos: () => Promise<void>
    searchTodoByKeyword: ( keyword: string ) => void
  }

  export interface Todo {
    completed: boolean
    id: number
    text: string
  }

  export interface TodoState {
    todos: Todo[]
  }
}

const state = reactive<TodoStore.TodoState>( {
  todos: [],
} )
const loading = ref( false )

const DEFAULT_TODOS = [
  {
    id: 1,
    text: "hello1",
    completed: false,
  },
  {
    id: 2,
    text: "hello2",
    completed: false,
  },
  {
    id: 3,
    text: "hello3",
    completed: false,
  },
  {
    id: 4,
    text: "hello4",
    completed: false,
  },
]

export default function useTodos(): TodoStore.UseTodoHook {
  const fetchTodos = async () => {
    state.todos = await new Promise( ( resolve ) => {
      let todos: TodoStore.Todo[]

      const localItems = localStorage.getItem( "todos" )
      if( localItems ) {
        todos = JSON.parse( localItems )
      } else {
        todos = DEFAULT_TODOS
        localStorage.setItem( "todos", JSON.stringify( todos ) )
      }

      setTimeout( () => {
        resolve( todos )
      }, 500 )
    } )
  }

  return {
    addTodo( keyword: string ) {
      state.todos = [ 
        ...state.todos,
        {
          completed: false,
          id: state.todos.length,
          text: keyword,
        }
      ]
      localStorage.setItem( "todos", JSON.stringify( [ ...state.todos ] ) )
    },
    deleteTodo( todoId: string ) {
      state.todos = state.todos.filter( ( todo ) => todo.id.toString() !== todoId )
    },
    fetchTodos,
    loading: computed( () => loading.value ),
    async searchTodoByKeyword( keyword ) {
      console.log( "keyword?", keyword )
      if( keyword ) {
        console.log( "data???", keyword )
        state.todos =  state.todos.filter( ( todo ) => todo.text.indexOf( keyword ) > -1 )
      } else {
        await fetchTodos() 
      }
      
      console.log( "todos?", state.todos )
    },
    ...toRefs( state ),
  }
}