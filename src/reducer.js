export default (state, { type, payload }) => {
  switch (type) {
    case 'TOGGLE_TODO':
      const todos = state.todos.map(todo => {
        return todo.id === payload.id ? { ...todo, ...payload } : todo
      })

      return {
        ...state,
        todos
      }

    default:
      return state
  }
}
