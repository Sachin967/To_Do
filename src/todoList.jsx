import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

export const TodoList = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <>
      <div className="Todo">
        <p
          onClick={() => toggleTodo(todo.id)}
          className={todo.completed ? 'completed' : ''}
        >
          {todo.title}
        </p>
        <div>
          <FontAwesomeIcon icon={faX} onClick={() => deleteTodo(todo.id)} />
        </div>
      </div>
    </>
  )
}
