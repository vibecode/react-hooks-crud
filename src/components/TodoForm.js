import React, { useState, useCallback, useContext } from 'react'
import TodosContext from '../context'

function TodoForm() {
  const [todo, setTodo] = useState('')

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
    <div>
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <div>
          <label className="text-center text-orange block mt-10 mb-2">
            Add something to do:
          </label>
          <input
            type="text"
            value={todo}
            className="border-orange border-solid border-2"
            onChange={e => setTodo(e.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

export default TodoForm
