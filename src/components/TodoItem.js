import React, { useState, useContext } from 'react'
import TodosContext from '../context'

function TodoItem({ id, complete, text }) {
  const [editState, setEditState] = useState({ isEdit: false, text: '' })
  const { dispatch } = useContext(TodosContext)

  const handleUpdate = ev => {
    ev.preventDefault()
    dispatch({ type: 'UPDATE_TODO', payload: { text: editState.text, id } })
    setEditState({
      isEdit: false,
      text: ''
    })
  }

  const handleEdit = () => {
    setEditState({ isEdit: true, text })
  }

  return editState.isEdit ? (
    <li className="bg-orange my-2 py-4" key={id}>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={editState.text}
          onChange={ev => setEditState({ ...editState, text: ev.target.value })}
        />
      </form>
    </li>
  ) : (
    <li className="flex items-center bg-orange my-2 py-4" key={id}>
      <span
        className={`cursor-pointer flex-1  ${complete && 'line-through'}`}
        onClick={() =>
          dispatch({
            type: 'TOGGLE_TODO',
            payload: {
              id,
              complete: !complete
            }
          })
        }
      >
        {text}
      </span>
      <button>
        <img
          className="h-6 px-1"
          src="https://icon.now.sh/edit/ffffff"
          alt="edit"
          onClick={handleEdit}
        />
      </button>
      <button
        onClick={() => dispatch({ type: 'DELETE_TODO', payload: { id } })}
      >
        <img
          className="h-6 px-1"
          src="https://icon.now.sh/delete/ffffff"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TodoItem
