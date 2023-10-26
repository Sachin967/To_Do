import { useState } from 'react'
import './App.css'
import { NewtodoForm } from './todoForm'
import { TodoList } from './todoList'
import { useEffect } from 'react'

export function App() {
  const [todos, setTodo] = useState(() => {
    const value = localStorage.getItem('Item')
    if (value === null) return []
    return JSON.parse(value)
  })

  useEffect(() => {
    localStorage.setItem('Item', JSON.stringify(todos))
  }, [todos])

  function addtoDo(title) {
    setTodo([{ id: crypto.randomUUID(), title, completed: false }, ...todos])
  }

  function toggleTodo(id) {
    setTodo(
      todos.map((todo) =>
        todo.id == id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    )
  }

  function deleteTodo(id) {
    setTodo((current) => {
      return current.filter((todo) => todo.id !== id)
    })
  }

  return (
    <div className="TodoWrapper">
      <h1 className="header">To-Do List</h1>
      <NewtodoForm onSubmit={addtoDo} />

      {todos.map((todo) => (
        <TodoList
          todo={todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  )
}
