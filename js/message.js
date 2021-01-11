var data = { first_name: "", last_name: "", email: "", phone: "", message: "" };

setInterval(() => {
  setData();
  let count = 0;
  for (const i in data) {
    if (data[i] !== "") count++;
    if (count !== 5)
      document.getElementById("btn_contact").setAttribute("disabled", true);
    else document.getElementById("btn_contact").removeAttribute("disabled");

    // console.log(count);
  }
}, 500);

function setData() {
  data = {
    first_name: document.getElementById("contact-me-name").value,
    last_name: document.getElementById("contact-me-last-name").value,
    email: document.getElementById("contact-me-email").value,
    phone: document.getElementById("contact-me-phone").value,
    message: document.getElementById("contact-me-message").value,
  };
}

function setFormBlank() {
  document.getElementById("contact-me-name").value = "";
  document.getElementById("contact-me-last-name").value = "";
  document.getElementById("contact-me-email").value = "";
  document.getElementById("contact-me-phone").value = "";
  document.getElementById("contact-me-message").value = "";
}

function sendMessage() {
  setData();

  fetch("https://gsheet-api.herokuapp.com/api/sci-tu/message", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      setFormBlank();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
