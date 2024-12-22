// custom.js
window.onload = function() {
    // Hide the entire header and toolbar
    document.querySelector('#header-container').style.display = 'none';
    document.querySelector('#maintoolbar').style.display = 'none';

    // Display only the run and stop buttons
    document.querySelector('#run_int').style.display = 'block';
    document.querySelector('#interrupt_int').style.display = 'block';

    // Hide other toolbar buttons individually
    document.querySelectorAll('#maintoolbar-container button').forEach(function(button) {
        if (button.id !== 'run_int' && button.id !== 'interrupt_int') {
            button.style.display = 'none';
        }
    });
}