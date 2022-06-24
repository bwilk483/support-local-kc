const { response } = require("express");

async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').Value.trim();
    const email = document.querySelector('#email-signup').Value.trim();
    const password = document.querySelector('#password-signup').Value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        })
    };

    if (response.ok) {
        console.log('success');
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);