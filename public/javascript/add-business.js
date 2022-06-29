async function newFormHandler(event) {
  event.preventDefault();

  const title = document.getElementById("business-title").value;
  const post_about = document.getElementById("about-business").value;

  const address = document.getElementById("business-address").value;
  alert(title);
  const response = await fetch(`/api/business`, {
    method: "POST",
    body: JSON.stringify({
      title,
      post_about,
      address,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    console.log("RESPONSE", response);
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}
console.log("new business load");
document
  .querySelector(".new-business-form")
  .addEventListener("submit", newFormHandler);
