const socket = io();

const handleEditBox = () => {
    const editForm = document.getElementById('editForm');
    const editBox = document.getElementById('editBox');

    editForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (editBox.value) {
            socket.emit('chat message', editBox.value);
            editBox.value = '';
        }
    });
};

const init = () => {
    handleEditBox();
};

window.onload = init;