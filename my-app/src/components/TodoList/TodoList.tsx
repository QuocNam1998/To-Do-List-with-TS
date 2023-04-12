import { useEffect, useState } from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todoList.module.scss'
import { Todo } from '../@types/todo.types'

export default function ToDoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)
  useEffect(() => {
    const todosString = localStorage.getItem('todos')
    const todosObj: Todo[] = JSON.parse(todosString || '[]')
    setTodos(todosObj)
  }, [])
  const doneTodos = todos.filter((todo) => todo.done)
  const notdoneTodos = todos.filter(function (todo) {
    return !todo.done
  })
  // Handle add todo task
  const addTodo = (name: string) => {
    const handler = (obj: Todo[]) => {
      return [...obj, todo]
    }
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((pre) => [...pre, todo])
    const todosString = localStorage.getItem('todos')
    const todosObj: Todo[] = JSON.parse(todosString || '[]')
    const newTodosObj = handler(todosObj)
    localStorage.setItem('todos', JSON.stringify(newTodosObj))
  }
  // Handle done todo task
  const handleDoneTodo = (id: string, done: boolean) => {
    setTodos((pre) => {
      return pre.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    })
    const todosString = localStorage.getItem('todos')
    const todosObj: Todo[] = JSON.parse(todosString || '[]')
    const newtodosObj = todosObj.map((todo) => {
      if (todo.id === id) return { ...todo, done }
      return todo
    })
    localStorage.setItem('todos', JSON.stringify(newtodosObj))
  }
  // Handle deleted todo task
  const handleDeleteTodo = (id: string) => {
    setTodos((pre) => pre.filter((todo) => todo.id !== id))
    const todosString = localStorage.getItem('todos')
    const todosObj: Todo[] = JSON.parse(todosString || '[]')
    const newtodosObj = todosObj.filter((todo) => todo.id !== id)
    localStorage.setItem('todos', JSON.stringify(newtodosObj))
  }
  // Handle start edit name todo task
  const startEditTodo = (id: string) => {
    const findedTodo = todos.find((todo) => todo.id === id)
    if (findedTodo) {
      setCurrentTodo(findedTodo)
    }
  }
  // Handle edit todo task
  const editTodo = (name: string) => {
    setCurrentTodo((prev) => {
      if (prev) return { ...prev, name }
      return null
    })
  }
  // Finish edit and update task name
  const finishTodo = (id: string) => {
    const handler = (todosObj: Todo[]) => {
      return todosObj.map((todo) => {
        if (todo.id === id) return currentTodo as Todo
        return todo
      })
    }
    setTodos(handler)
    setCurrentTodo(null)
    const todosString = localStorage.getItem('todos')
    const todosObj: Todo[] = JSON.parse(todosString || '[]')
    const newtodosObj = handler(todosObj)
    localStorage.setItem('todos', JSON.stringify(newtodosObj))
  }
  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <div>
          <TaskInput addTodo={addTodo} currentTodo={currentTodo} editTodo={editTodo} finishTodo={finishTodo} />
          <TaskList
            listTodo={notdoneTodos}
            handleDoneTodo={handleDoneTodo}
            handleDeleteTodo={handleDeleteTodo}
            startEditTodo={startEditTodo}
          />
          <TaskList
            DoneTaskList
            listTodo={doneTodos}
            handleDoneTodo={handleDoneTodo}
            handleDeleteTodo={handleDeleteTodo}
            startEditTodo={startEditTodo}
          />
        </div>
      </div>
    </div>
  )
}
