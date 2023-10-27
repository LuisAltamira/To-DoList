function ModalActions(uuid) {
    return `
        <button class="hover:border-blue-100 text-white font-semibold py-2 px-4 rounded-md mr-2" onclick="">Actualizar</button>
        <button class="border border-fuchsia-00 hover:border-blue-100 text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors duration-300" onclick="closeModalUpdate()">Cancelar</button>
    `
}