async function updateTask (uuid, data) {
    const response = await fetch(`/api/v1/todos/${uuid}/`, {
        method: 'PUT',
        headers: {
            'X-CSRFToken': Cookies.get('csrftoken'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const task = await response.json()
    return task
}