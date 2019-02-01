import React, { useContext } from 'react'
import TodosContext from '../context'
import TodoItem from './TodoItem'

export default function TodoList() {
  const { state } = useContext(TodosContext)

  const title =
    state.todos.length > 0 ? `${state.todos.length} Todos` : 'Nothing todo'

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold text-orange my-10">{title}</h1>

      <ul className="list-reset text-white p-0">
        {state.todos.map(todo => (
          <TodoItem {...todo} />
        ))}
      </ul>
    </div>
  )
}
