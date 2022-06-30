const titleId = document.getElementById("business-title");
const postAboutId = document.getElementById("about-business");
const businessId = document.getElementById("businessId");
const addressId = document.getElementById("business-address");
async function editFormHandler(event) {
  event.preventDefault();
  //alert("save business");
  const id = businessId.value;
  const post_about = postAboutId.value;
  const title = titleId.value;
  const address = addressId.value;
  //alert("put");
  const response = await fetch(`/api/business`, {
    method: "PUT",
    body: JSON.stringify({
      id,
      title,
      post_about,
      address,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-business-form")
  .addEventListener("submit", editFormHandler);
