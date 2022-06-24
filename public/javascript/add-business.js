async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="business-title"]').value;
    const post_about = document.querySelector('input[name="about-business"]').value;
    const address = document.querySelector('input[name="business-address"]').value;

    const response = await fetch(`/api/businesses`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_about,
            address
        }),
        headers: {
            'Business-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-business-form').addEventListener('submit', newFormHandler);