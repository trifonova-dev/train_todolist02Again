import {FilterValueType, Task} from './App'
import {Button} from './Button'

type Props = {
    title: string
    tasks: Task[]
    deleteTask: (taskId: Task["id"]) => void
    changeFilter:(filter: FilterValueType) =>void
}

export const TodolistItem = ({title, tasks, deleteTask,changeFilter}: Props) => {
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
                                    title={"XYZ"}
                                    onClick={() => deleteTask(task.id)}/>
                            </li>
                        )
                    })}
                </ul>
            )}
            <div>
                <Button
                    onClick={()=>changeFilter("All")}
                    title={'All'}/>
                <Button
                    onClick={()=>changeFilter("Active")}
                    title={'Active'}/>
                <Button
                    onClick={()=>changeFilter("Completed")}
                    title={'Completed'}/>
            </div>
        </div>
    )
}
