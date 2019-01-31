import React from 'react'

const context = React.createContext({
  todos: [
    {
      id: 1,
      text: 'lol'
    },
    {
      id: 2,
      text: 'kek'
    }
  ]
})

export default context
