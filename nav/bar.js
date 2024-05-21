function showCustomAlert() {
    setTimeout(closeCustomAlert, 5000);
    document.querySelector('.show-alert-button').style.display = 'none';
    document.getElementById('customAlert').style.display = 'block';
    document.querySelector('.alert-overlay .linkalet').style.display = 'block';
    document.getElementById(' show-alert-button').style.display = 'none';
}
function closeCustomAlert() {
    document.querySelector('.show-alert-button').style.display = 'block';
    document.getElementById('customAlert').style.display = 'none';
    document.querySelector('.alert-overlay ').style.display = 'none';
}
