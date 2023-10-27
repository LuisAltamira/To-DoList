async function createTask(data) {
    const response = await fetch(`/api/v1/todos/`, {
        method: 'POST',
        headers: {
            'X-CSRFToken': Cookies.get('csrftoken'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const task = await response.json()
    return task
}