function showSignIn() {
    window.location.href = '../signIn/signIn.html';
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('button[onclick="showSignIn()"]').onclick = showSignIn;
});