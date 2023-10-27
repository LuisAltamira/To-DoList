async function getTask (uuid) {
    const response = await fetch(`/api/v1/todos/${uuid}/`)
    const task = await response.json()
    return task
}