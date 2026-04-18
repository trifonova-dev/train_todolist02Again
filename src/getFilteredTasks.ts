import {FilterValueType, Task} from "./App.tsx";

export const getFilteredTasks = (tasks:Task[], filter:FilterValueType) => {
    let filteredtasks = tasks
    if (filter === "Active") {
        filteredtasks = tasks.filter(t => !t.isDone)
    }
    if (filter === "Completed") {
        filteredtasks = tasks.filter(t => t.isDone)
    }
    return filteredtasks
}