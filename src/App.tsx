import './App.css'
import {TodolistItem} from './TodolistItem'
import {useState} from "react";

export type Task = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValueType = "All" | "Active" | "Completed"

export const App = () => {
    const [tasks, setTask] = useState<Task[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: false},
        {id: 6, title: 'RTK query', isDone: false},
    ])

    const deleteTask = (taskID: number) => {
        const filteredT = tasks.filter(t => t.id !== taskID)
        console.log(tasks)
        setTask(filteredT)
    }

    const [filter, setFilter] = useState<FilterValueType>("All")
    let filteredTasks = tasks
    if (filter === "Active") {
        filteredTasks = tasks.filter(t => !t.isDone)
    }
    if (filter === "Completed") {
        filteredTasks = tasks.filter(t => t.isDone)
    }

    const changeFilter = (filter: FilterValueType) => {
        setFilter(filter)
    }

    return (
        <div className="app">
            <TodolistItem
                title="What to learn"
                tasks={filteredTasks}
                deleteTask={deleteTask}
                changeFilter={changeFilter}
            />
        </div>
    )
}
