async function editFormHandler(event) {
    event.preventDefault();
}

const title = document.querySelector('input[name="post-title"]').value;
    const post_about = document.querySelector('input[name="about-business"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

      const response = await fetch(`/api/business/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_about
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
  
  
  document.querySelector('.edit-business-form').addEventListener('submit', editFormHandler);
      