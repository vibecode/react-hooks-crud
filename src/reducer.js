import uuid from 'uuid/v4'

export default (state, { type, payload }) => {
  switch (type) {
    case 'CREATE_TODO': {
      console.log(payload)
      const todo = {
        id: uuid(),
        text: payload,
        complete: false
      }
      return {
        ...state,
        todos: [...state.todos, todo]
      }
    }
    case 'TOGGLE_TODO': {
      const todos = state.todos.map(todo => {
        return todo.id === payload.id ? { ...todo, ...payload } : todo
      })

      return {
        ...state,
        todos
      }
    }

    case 'DELETE_TODO': {
      const todos = state.todos.filter(todo => todo.id !== payload.id)

      return {
        ...state,
        todos
      }
    }

    default:
      return state
  }
}
