document.addEventListener("DOMContentLoaded", function () {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const errorCode = params.get('error_code');

    const iconElement = document.getElementById('icon');
    const messageElement = document.getElementById('message');
    const bodyElement = document.body;

    if (errorCode === 'otp_expired') {
        iconElement.innerHTML = '❌'; 
        iconElement.style.color = '#ff4d4d';  
        messageElement.innerHTML = 'The confirmation link has expired. Please request a new link.';
        bodyElement.style.backgroundColor = '#ff4d4d';
    } else {
        bodyElement.style.backgroundColor = '#028354';
        setTimeout(() => {
            document.querySelector(".checkmark").style.opacity = "1";
        }, 500);
    }
});
