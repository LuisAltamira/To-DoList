async function deleteTask(uuid) {
    await fetch(`/api/v1/todos/${uuid}/`, {
        method: 'DELETE',
        headers: {
            'X-CSRFToken': Cookies.get('csrftoken'),
            'Content-Type': 'application/json'
        }
    })
}