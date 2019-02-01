import React, { useState, useCallback, useContext } from 'react'
import TodosContext from '../context'

function TodoForm() {
  const [todo, setTodo] = useState('sad')

  const { dispatch } = useContext(TodosContext)

  const handleSubmit = ev => {
    const todoCleared = todo.trim()

    ev.preventDefault()
    if (todoCleared) {
      dispatch({ type: 'CREATE_TODO', payload: todoCleared })
      setTodo('')
    }
  }

  return (
    <form className="flex justify-center p-5" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        className="border-black border-solid border-2"
        onChange={e => setTodo(e.target.value)}
      />
    </form>
  )
}

export default TodoForm
