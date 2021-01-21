const head = document.querySelector("#head");
const listMembers = document.querySelector("#members");
const loader1 = document.querySelector("#loader1");


// Head
fetch("../data_json/student_council.json")
  .then((response) => response.json())
  .then((data) => {
    let items = data.items;
    items.forEach((element) => {
      // console.log(element);

      let node = `
      <div class="cell-sm-6 cell-md-3">
        <img class="img-responsive reveal-inline-block img-rounded"
        src="../images/users/Student_council-${element.id_name}.jpg" width="270" height="270" alt="">
        <div class="offset-top-20">
            <h6 class="text-bold text-primary" style="color: black">${element.name_th}</h6>
        </div>
        <div class="offset-top-5">
            <p>${element.position}</p>
        </div>
    </div>`;
      if (element.position === "ประธาน" || element.position === "รองประธาน") {
        head.innerHTML += node;
      }
    });
    loader1.classList.remove("active");
  });

// member
fetch("../data_json/student_council.json")
  .then((response) => response.json())
  .then((data) => {
    let items = data.items;
    items.forEach((element) => {
      // console.log(element);

      let node = `
        <div class="cell-sm-6 cell-md-3">
          <img class="img-responsive reveal-inline-block img-rounded"
          src="../images/users/Student_council-${element.id_name}.jpg" width="270" height="270" alt="">
          <div class="offset-top-20">
              <h6 class="text-bold text-primary" style="color: black">${element.name_th}</h6>
          </div>
          <div class="offset-top-5">
              <p>${element.position}</p>
          </div>
      </div>`;
      if (element.position !== "ประธาน" && element.position !== "รองประธาน") {
        listMembers.innerHTML += node;
      }
    });
  });
