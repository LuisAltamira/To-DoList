// load all tasks and render to document
async function renderAllTask() {
    const tasks = await getTasks()
    let renderTask = ''

    tasks.forEach(task => {
        renderTask += Task(task.name, task.completed, task.uuid)
    })
    
    document.querySelector('#container-tasks').innerHTML = renderTask
}

// Function to open delete modal
function openModalDelete(data) {
    document.getElementById('modal-delete').classList.remove('hidden')
    const btnDelete = document.getElementById('btn-delete')

    btnDelete.setAttribute('data-uuid', data.uuid)
    btnDelete.setAttribute('data-task-name', data.name)

    document.getElementById('task-name-delete').innerHTML = data.name
}

// Function to close delete modal
function closeModalDelete() {
    document.getElementById("modal-delete").classList.add("hidden")
}

// Function to delete task
async function handleClickDeleteTask() {
    const uuid = document.getElementById('btn-delete').getAttribute('data-uuid')
    await deleteTask(uuid)
    Toast('Tarea eliminada exitosamente')
    closeModalDelete()
    await renderAllTask()
}

// Function to open update modal
async function openModalUpdate(uuid) {
    document.getElementById('modal-update').classList.remove('hidden')

    const taskInput = document.getElementById('task-name')
    const taskUUID = document.getElementById('task-completed')

    const task = await getTask(uuid)

    taskInput.value = task.name
    taskUUID.value = task.completed
    taskUUID.setAttribute('data-id', task.uuid)
}

// Function to close update modal
function closeModalUpdate() {
    document.getElementById("modal-update").classList.add("hidden")
}

// Function to update task
async function handleClickUpdateTask() {
    const taskInput = document.getElementById('task-name')
    const taskUUID = document.getElementById('task-completed')

    await updateTask(taskUUID.getAttribute('data-id'), {name: taskInput.value, completed: taskUUID.value})
    
    await renderAllTask()

    closeModalUpdate()

    Toast('La tarea se ha actualizado exitosamente')
}

// Function to create task
async function onSubmitTask() {
    const inputNewValue = document.getElementById('input-new-task')

    if ( inputNewValue.value.trim() === '' ) {
        Toast('Campo vacío, favor de verificarlo')
        return
    }

    const newTask = await createTask({ name: inputNewValue.value, completed: false})
    inputNewValue.value = ''
    await renderAllTask()

    Toast('La tarea se ha creado exitosamente')
}


// Function to complete task
async function completeTask(uuid, data) {

    await updateTask(uuid, {...data, completed: !data.completed})
    await renderAllTask()

    Toast('La tarea se ha actualizado exitosamente')
} 

// Load when document is ready
(async () => {
    await renderAllTask()
})()