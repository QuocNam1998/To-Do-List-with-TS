import styles from './taskList.module.scss'
import { Todo } from '../@types/todo.types'

interface PropsTaskList {
  DoneTaskList?: boolean
  listTodo?: Todo[]
  handleDoneTodo: (id: string, done: boolean) => void
  handleDeleteTodo: (id: string) => void
  startEditTodo: (id: string) => void
}

export default function TaskList(props: PropsTaskList) {
  const { DoneTaskList, handleDeleteTodo, listTodo, handleDoneTodo, startEditTodo } = props
  // Currying function
  const onChangeCheckBox = (idTodo: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    handleDoneTodo(idTodo, event.target.checked)
  }
  // Currying function
  const onChangeDeleted = (idTodo: string) => () => {
    handleDeleteTodo(idTodo)
  }
  // handle EditTodo
  const handleEditTodo = (idTodo: string) => {
    startEditTodo(idTodo)
  }
  return (
    <div>
      <h1 className={styles.title}>{DoneTaskList ? 'Hoàn Thành' : 'Chưa hoàn thành'}</h1>
      <div className={styles.taskList}>
        {listTodo?.map((todo) => (
          <div key={todo.id} className={styles.task}>
            <input type='checkbox' checked={todo.done} onChange={onChangeCheckBox(todo.id)} />
            <span className={`${styles.taskName} ${!todo.done ? '' : styles.isDone}`}>{todo.name}</span>
            <div className={styles.btn}>
              <button className={styles.taskBtn} onClick={() => handleEditTodo(todo.id)}>
                🖊️
              </button>
              <button className={styles.taskBtn} onClick={onChangeDeleted(todo.id)}>
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
