async function getTasks() {
    const response = await fetch("/api/v1/todos/")
    const tasks = await response.json()
    
    return tasks
}