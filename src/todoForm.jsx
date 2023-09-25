import { useState } from 'react'

export function NewtodoForm({ onSubmit }) {

  const [newItem, setnewItem] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault()
    if (newItem != '') {
      onSubmit(newItem)
    }

    setnewItem('')
  }
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        className="todo-input"
        placeholder="What to add today?"
        type="text"
        id="item"
        value={newItem}
        onChange={(e) => setnewItem(e.target.value)}
      />
      <button className="todo-btn">Add Task</button>
    </form>
  )
}
