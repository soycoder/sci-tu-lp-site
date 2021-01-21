const listLecturer = document.querySelector("#listLecturer");
const listStaff = document.querySelector("#listStaff");
const loader1 = document.querySelector("#loader1");
const loader2 = document.querySelector("#loader2");

// Lecturers
fetch("../data_json/lecturers.json")
  .then((response) => response.json())
  .then((data) => {
    let items = data.items;
    items.forEach((element) => {
      // console.log(element);

      let node = `
      <div class="cell-sm-6 cell-md-3">
        <a href="team-member-profile.html?l=${element.id_name}">
          <img class="img-responsive reveal-inline-block img-rounded"
          src="../images/users/Lecturer-${element.id_name}.jpg" width="200" height="200" alt="">
        </a>
        <div class="offset-top-20">
            <h6 class="text-bold"><a class="text-info" href="team-member-profile.html?l=${element.id_name}">${element.title}${element.name_th}</a></h6>
        </div>
        <div class="offset-top-5">
            <p>${element.department_th}</p>
        </div>
    </div>`;
      listLecturer.innerHTML += node;
    });
    loader1.classList.remove("active");
  });

// staffs
fetch("../data_json/staffs.json")
  .then((response) => response.json())
  .then((data) => {
    let items = data.items;
    items.forEach((element) => {
      // console.log(element);

      let node = `
        <div class="cell-sm-6 cell-md-3">
          <a href="team-member-profile.html?s=${element.id_name}">
            <img class="img-responsive reveal-inline-block img-rounded"
            src="../images/users/Staff-${element.id_name}.jpg" width="200" height="200" alt="">
          </a>
          <div class="offset-top-20">
              <h6 class="text-bold"><a class="text-info" href="team-member-profile.html?s=${element.id_name}">${element.title}${element.name_th}</a></h6>
          </div>
          <div class="offset-top-5">
              <p>${element.job}</p>
          </div>
      </div>`;
      listStaff.innerHTML += node;
    });
    loader2.classList.remove("active");
  });
