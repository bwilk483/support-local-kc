async function signupFormHandler(event) {
  event.preventDefault();
<<<<<<< HEAD

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("success");
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
=======

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
  }

  if (response.ok) {
    console.log("success");
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
>>>>>>> 0bb7b63 (test)
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
