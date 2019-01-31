import React, { useContext } from 'react'
import TodosContext from '../context'

export default function TodoList() {
  const { state } = useContext(TodosContext)

  return (
    <div>
      <ul>
        {state.todos.map(({ id, text }) => (
          <li key={id}>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
