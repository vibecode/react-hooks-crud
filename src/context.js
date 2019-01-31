import React from 'react'

const context = React.createContext({
  todos: [
    {
      id: 1,
      text: 'lol',
      complete: false
    },
    {
      id: 2,
      text: 'kek',
      complete: false
    }
  ]
})

export default context
