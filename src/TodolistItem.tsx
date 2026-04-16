import {FilterType, Task} from './App'
import {Button} from './Button'

type Props = {
    title: string
    tasks: Task[]
    deleteTask: (taskId: number) => void
    changeFilterTasks: (filter: FilterType) => void
}

export const TodolistItem = ({
                                 title,
                                 tasks,
                                 deleteTask,
                                 changeFilterTasks,
                             }: Props) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title={'+'}/>
            </div>
            {tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {tasks.map(task => {
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                                <Button
                                    title={"X"}
                                    onClick={() => deleteTask(task.id)}
                                >x</Button>
                            </li>
                        )
                    })}
                </ul>
            )}
            <div>
                <Button
                    onClick={() => changeFilterTasks("All")}
                    title={'All'}/>
                <Button
                    onClick={() => changeFilterTasks("Active")}
                    title={'Active'}/>
                <Button
                    onClick={() => changeFilterTasks("Completed")}
                    title={'Completed'}/>
            </div>
        </div>
    )
}
