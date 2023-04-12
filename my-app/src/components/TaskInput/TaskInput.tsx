import { useState } from 'react'
import { Todo } from '../@types/todo.types'
import styles from './taskInput.module.scss'

interface TaskInput {
  addTodo: (name: string) => void
  currentTodo: Todo | null
  editTodo: (name: string) => void
  finishTodo: (id: string) => void
}

export default function TaskInput(Props: TaskInput) {
  const [name, setName] = useState<string>('')
  const { addTodo, currentTodo, editTodo, finishTodo } = Props
  // Handle set name
  const handleSetName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    currentTodo ? editTodo(value) : setName(value)
  }

  // Add todos list
  const handleAddTodos = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (currentTodo) {
      finishTodo(currentTodo.id)
      if (name) setName('')
    } else {
      addTodo(name)

      setName('')
    }
  }

  return (
    <div>
      <h1 className={styles.title}>To do list type script</h1>
      <form className={styles.from} onSubmit={handleAddTodos}>
        <input
          type='text'
          placeholder='caption goes here'
          value={currentTodo ? currentTodo.name : name}
          onChange={handleSetName}
        />
        <button className={styles.submit}>{currentTodo ? '✔️' : '➕'}</button>
      </form>
    </div>
  )
}
