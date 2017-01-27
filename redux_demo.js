import { createStore } from 'redux'

const initialState = {
  todos: []
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [...state.todos, action.todo]
      })
    case 'DELETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter(t => t !== action.todo)
      })
    case 'UPDATE_TODO':
      let { previousTodo: prev, updatedTodo: curr } = action
      return {...state, todos: state.todos.map(t => t === prev ? curr : prev) }

    default:
     return state
  }
}

const store = createStore(rootReducer)

const addTodo = todo => (
  { type: 'ADD_TODO', todo }
)

const updateTodo = (previousTodo, updatedTodo) => (
  { type: 'UPDATE_TODO', previousTodo, updatedTodo }
)

const deleteTodo = todo => (
  { type: 'DELETE_TODO', todo }
)

store.dispatch(addTodo('thing'))
store.dispatch(updateTodo('thing', 'better thing'))

debugger