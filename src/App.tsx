import './App.css'
import {TodolistItem} from './TodolistItem'
import {useState} from "react";
import {getFilteredTasks} from "./getFilteredTasks.ts";

export type Task = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValueType = "All" | "Active" | "Completed"

export const App = () => {
    const [tasks, setTasks] = useState<Task[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: false},
        {id: 6, title: 'RTK query', isDone: false},
    ])

    const deleteTask = (taskId: Task["id"]) => {
        const nextState: Task[] = tasks.filter(t => t.id !== taskId)
        setTasks(nextState)
    }

    const [filter, setFilter] = useState<FilterValueType>("All")

    const changeFilter = (filter: FilterValueType) => {
        setFilter(filter)
    }
    const filteredTasks = getFilteredTasks(tasks, filter)

    return (
        <div className="app">
            <TodolistItem
                title="What to learn"
                tasks={filteredTasks}
                deleteTask={deleteTask}
                changeFilter={changeFilter}/>
        </div>
    )
}
