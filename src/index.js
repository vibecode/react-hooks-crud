import React, { useContext, useReducer } from 'react'
import todosReducer from './reducer'
import TodosContext from './context'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

const App = () => {
  const initialState = useContext(TodosContext)

  const [state, dispatch] = useReducer(todosReducer, initialState)

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <TodoForm />
      <TodoList />
    </TodosContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
