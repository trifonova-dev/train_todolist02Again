import {FilterValueType, Task} from "./App.tsx";

export const getFilteredTasks = (tasks:Task[], filter:FilterValueType) => {
    let filteredTasks = tasks

    if (filter === "Active") {
        filteredTasks = tasks.filter(t => !t.isDone)
    }
    if (filter === "Completed") {
        filteredTasks = tasks.filter(t => t.isDone)
    }
    return filteredTasks
}