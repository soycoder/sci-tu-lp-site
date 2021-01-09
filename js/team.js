const listLecturer = document.querySelector("#listLecturer");
const listStaff = document.querySelector("#listStaff");
const loader1 = document.querySelector("#loader1");
const loader2 = document.querySelector("#loader2");

fetch(
  "https://script.google.com/a/dome.tu.ac.th/macros/s/AKfycbxCvizMF7l1K971hLCOWsGkcJ9ahlUs0R6npTtQ/exec?path=/lecturer&method=GET"
)
  .then((response) => response.json())
  .then((data) => {
    let items = data.items;
    items.forEach((element) => {
      console.log(element);

      let node = `
      <div class="cell-sm-6 cell-md-3">
        <img class="img-responsive reveal-inline-block img-rounded"
        src="../images/users/Lecturer-${element.id_name}.jpg" width="270" height="270" alt="">
        <div class="offset-top-20">
            <h6 class="text-bold text-primary">${element.name_th}</h6>
        </div>
        <div class="offset-top-5">
            <p>${element.department_th}</p>
        </div>
    </div>`;
      listLecturer.innerHTML += node;
    });
    loader1.classList.remove("active");
  });

fetch(
  "https://script.google.com/a/dome.tu.ac.th/macros/s/AKfycbxCvizMF7l1K971hLCOWsGkcJ9ahlUs0R6npTtQ/exec?path=/staff&method=GET"
)
  .then((response) => response.json())
  .then((data) => {
    let items = data.items;
    items.forEach((element) => {
      console.log(element);

      let node = `
        <div class="cell-sm-6 cell-md-3">
          <img class="img-responsive reveal-inline-block img-rounded"
          src="../images/users/Staff-${element.id_name}.jpg" width="270" height="270" alt="">
          <div class="offset-top-20">
              <h6 class="text-bold text-primary">${element.name_th}</h6>
          </div>
          <div class="offset-top-5">
              <p>${element.job}</p>
          </div>
      </div>`;
      listStaff.innerHTML += node;
    });
    loader2.classList.remove("active");
  });
