function Task(task, completed, uuid) {
    const data = { name: task, completed, uuid }
    return completed
    ? `<div class="flex justify-between mb-4" id="container-${uuid}"}>
            <div class="flex" onclick="completeTask('${uuid}', { name: '${task}', completed: ${completed} })">
                
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-[#FB5944]">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                    </svg>
                </div>

                <span class="flex items-center ml-2 line-through text-[#B1B1B1] block">
                    ${task}
                </span>                        
            </div>

            <div class="flex justify-between">
                <button class="mr-6" onclick="openModalUpdate(('${uuid}'))">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#B1B1B1]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>                              
                </button>
                <button onclick="openModalDelete({ name: '${task}', uuid: '${uuid}' })">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#B1B1B1]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>                              
                </button>
            </div>
        </div>`
    : `<div class="flex justify-between mb-4" id="container-${uuid}">
            <div class="flex" onclick="completeTask( '${uuid}', {name: '${task}', completed: ${completed} })">
                <div class="flex justify-center items-center p-1">
                    <span class="rounded-full w-6 h-6 border border-[#B1B1B1] block"></span>                          
                </div>
                
                <span class="flex items-center ml-2 text-[#585858] block">
                    ${task}
                </span>
            </div>

            <div class="flex justify-between">
                <button class="mr-6" onclick="openModalUpdate('${uuid}')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#B1B1B1]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>                              
                </button>
                <button onclick="openModalDelete({ name: '${task}', uuid: '${uuid}' })">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#B1B1B1]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>                              
                </button>
            </div>
        </div>`
}