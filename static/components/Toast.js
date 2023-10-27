
function Toast(text) {
    Toastify({
        text,
        duration: 3000,
    style: {
        background: '#323232', //"linear-gradient(to right, #022162, #3b82f6)",
    },
        onClick: function(){} // Callback after click
    }).showToast()
}
