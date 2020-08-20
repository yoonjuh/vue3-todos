import { computed, ref, reactive, ComputedRef, toRefs, Ref } from "vue"

export namespace TodoStore {
  export interface UseTodoHook {
    loading: ComputedRef<boolean>
    todos: Ref<Todo[]>

    addTodo: ( keyword: string ) => void
    deleteTodo: ( todoId: string ) => void
    fetchTodos: () => Promise<void>
    searchTodoByKeyword: ( keyword: string ) => void
    syncTodos: () => void
    updateTodo: ( todo: TodoStore.Todo ) => void
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

  const syncTodos = () => {
    const local_items = localStorage.getItem( "todos" ) 
    if( local_items ) {
      state.todos = JSON.parse( local_items )
    }
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
      if( keyword ) {
        state.todos =  state.todos.filter( ( todo ) => todo.text.indexOf( keyword ) > -1 )
      } else {
        await fetchTodos() 
      }
    },
    syncTodos,
    updateTodo( todo ) {
      const rest_todos = state.todos.filter( ( { id } ) => id !== todo.id )
      state.todos = [
        ...rest_todos,
        {
          ...todo,
          completed: ! todo.completed
        },
      ].sort( ( current, next ) => current.id - next.id )

      localStorage.setItem( "todos", JSON.stringify( state.todos ) )
    },
    ...toRefs( state ),
  }
}