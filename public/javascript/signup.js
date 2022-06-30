async function signupFormHandler(event) {
  event.preventDefault();
<<<<<<< HEAD
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
  }

  if (response.ok) {
    console.log("success");
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
=======
=======
>>>>>>> 8ce68f9 (edit fixed)

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
<<<<<<< HEAD
>>>>>>> d6ca28f4fe2f84fbc5c1109cf217bcf46eeba825
=======
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
>>>>>>> 8ce68f9 (edit fixed)
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
