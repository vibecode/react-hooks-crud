import React, { useContext } from 'react'
import TodosContext from '../context'

export default function TodoList() {
  const { state } = useContext(TodosContext)

  const title =
    state.todos.length > 0 ? `${state.todos.length} Todos` : 'Nothing todo'

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold text-orange my-10">{title}</h1>
      <ul className="list-reset text-white p-0">
        {state.todos.map(({ id, text }) => (
          <li className="flex items-center bg-orange my-2 py-4" key={id}>
            <span className="cursor-pointer flex-1">{text}</span>
            <button>
              <img
                className="h-6 px-1"
                src="https://icon.now.sh/edit/ffffff"
                alt="edit"
              />
            </button>
            <button>
              <img
                className="h-6 px-1"
                src="https://icon.now.sh/delete/ffffff"
                alt="delete"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
