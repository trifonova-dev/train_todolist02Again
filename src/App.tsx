import './App.css'
import {TodolistItem} from './TodolistItem'
import {useState} from "react";

export type Task = {
    id: number
    title: string
    isDone: boolean
}

export type FilterType = "All" | "Active" | "Completed"

export const App = () => {
    const [tasks, setTasks] = useState<Task[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: false},
        {id: 6, title: 'RTK query', isDone: false},
    ])

    let filteredTasks = tasks
    const deleteTask = (taskId: number) => {
        filteredTasks = filteredTasks.filter(t => t.id !== taskId)
        setTasks(filteredTasks)
    }


    const [filter, setFilter] = useState<FilterType>("Active")
    let filteredValueTasks = tasks

    if (filter === "Active") {
        filteredValueTasks = filteredValueTasks.filter(t => !t.isDone)
    }

    if (filter === "Completed") {
        filteredValueTasks = filteredValueTasks.filter(t => t.isDone)
    }

    const changeFilterTasks = (filter: FilterType) => {
        setFilter(filter)
    }

    return (
        <div className="app">
            <TodolistItem
                title="What to learn"
                tasks={filteredValueTasks}
                deleteTask={deleteTask}
                changeFilterTasks={changeFilterTasks}

            />
        </div>
    )
}
