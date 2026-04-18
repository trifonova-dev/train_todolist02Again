import {FilterValueType, Task} from "./App.tsx";

export const getFilterTasks = (tasks:Task[], filter:FilterValueType) => {

    let filteredTasks: Task[] = tasks

    if (filter === "Active") {
        filteredTasks = tasks.filter(t => !t.isDone)
    }
    if (filter === "Completed") {
        filteredTasks = tasks.filter(t => t.isDone)
    }
    return filteredTasks
}