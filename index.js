document.addEventListener("DOMContentLoaded", function () {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const errorCode = params.get('error_code');

    const iconElement = document.getElementById('icon');
    const messageElement = document.getElementById('message');

    if (errorCode === 'otp_expired') {
        iconElement.innerHTML = '❌'; 
        iconElement.style.color = '#ff4d4d';  
        messageElement.innerHTML = 'The confirmation link has expired. Please request a new link.';
        messageElement.style.color = '#ff4d4d';
        bodyElement.classList.add('error-bg');
    } else {
        bodyElement.classList.add('success-bg');
        setTimeout(() => {
            document.querySelector(".checkmark").style.opacity = "1";
        }, 500);
    }
});
