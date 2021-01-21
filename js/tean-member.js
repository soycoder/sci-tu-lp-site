const urlParams = new URLSearchParams(window.location.search);
const lecturer_id = urlParams.get("l");
const staff_id = urlParams.get("s");
console.log(lecturer_id + " / " + staff_id);


const name_ = document.getElementById("member_name");
const img_ = document.getElementById("member_img");
const department_ = document.getElementById("member_department");
const bio_ = document.getElementById("member_bio");

// const cert_ = document.getElementById("member_cert");
// const award_ = document.getElementById("member_award");

const phone_ = document.getElementById("member_phone");
const email_ = document.getElementById("member_email");

// Lecturers
if (lecturer_id) {
  fetch("../data_json/lecturers.json")
    .then((response) => response.json())
    .then((data) => {
      let items = data.items;
      items.forEach((element) => {
        // console.log(element);
        if (element.id_name === lecturer_id) {
          document.title = `${element.name_th}`;

          name_.innerText = `${element.title}${element.name_th}`;
          img_.src = `../images/users/Lecturer-${element.id_name}.jpg`;
          department_.innerText = `${element.department_th}`;
          bio_.innerText = `${element.bio}`;

          // cert_.innerText = `${element.cert}`
          // award_.innerText = `${element.award}`

          phone_.href = `tel:${element.phone}`;
          phone_.innerText = `${element.phone.slice(0,3)}-${element.phone.slice(3)}`;
          email_.href = `mailto:${element.email}`;
          email_.innerText = `${element.email}`;
        }
      });
    });
}

// Staffs
if (staff_id) {
  fetch("../data_json/staffs.json")
    .then((response) => response.json())
    .then((data) => {
      let items = data.items;
      items.forEach((element) => {
        // console.log(element);
        if (element.id_name === staff_id) {
          document.title = `${element.name_th}`;

          name_.innerText = `${element.title}${element.name_th}`;
          img_.src = `../images/users/Staff-${element.id_name}.jpg`;
          department_.innerText = `${element.job}`;
          bio_.innerText = `${element.bio}`;

          // cert_.innerText = `${element.cert}`
          // award_.innerText = `${element.award}`

          phone_.href = `tel:${element.phone}`;
          phone_.innerText = `${element.phone.slice(0,3)}-${element.phone.slice(3)}`;
          email_.href = `mailto:${element.email}`;
          email_.innerText = `${element.email}`;
        }
      });
    });
}
