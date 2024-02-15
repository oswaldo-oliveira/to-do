import styles from './Header.module.css'

interface Props {
  taskCounter: number
  checkedTasksCounter: number
}

export function Header({ taskCounter, checkedTasksCounter }: Props) {
  return (
    <header className={styles.header}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{taskCounter}</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>
          {taskCounter === 0
            ? taskCounter
            : `${checkedTasksCounter} de ${taskCounter}`}
        </span>
      </aside>
    </header>
  )
}
