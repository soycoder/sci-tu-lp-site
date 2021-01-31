const urlParams = new URLSearchParams(window.location.search);
const lecturer_id = urlParams.get("l");
const staff_id = urlParams.get("s");
console.log(lecturer_id + " / " + staff_id);

const name_ = document.getElementById("member_name");
const img_ = document.getElementById("member_img");
const department_ = document.getElementById("member_department");

const member_content = document.getElementById("team-member-content"); 

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

          // cert_.innerText = `${element.cert}`
          // award_.innerText = `${element.award}`

          phone_.href = `tel:${element.phone}`;
          phone_.innerText = `${element.phone.slice(0,3)}-${element.phone.slice(3)}`;
          email_.href = `mailto:${element.email}`;
          email_.innerText = `${element.email}`;

          // 1. social
          if (element.social.has == true) {

            let node = `<div class="offset-top-15 offset-sm-top-30">
                          <ul id="list-social" class="list-inline list-inline-xs list-inline-madison">
                          </ul>
                      </div>`;
            member_content.innerHTML += node;

            let list_social = document.getElementById("list-social")
            let arr = ["facebook","twitter","google","instagram"];
            for (let i = 0; i < arr.length; i++) {
              // console.log(element.social[arr[i]]);
              if (element.social[arr[i]] != null) {
                let textnode = document.createElement("LI");
                textnode.innerHTML = `<a class="icon novi-icon icon-xxs fa-${arr[i]} icon-circle icon-gray-light-filled" href="${element.social[arr[i]]}"></a>`;
                // console.log(`<a class="icon novi-icon icon-xxs fa-${arr[i]} icon-circle icon-gray-light-filled" href="${element.social[arr[i]]}"></a>`);
                list_social.appendChild(textnode);
              }
            }
          }

          // 2. Education
          if (element.education.length != 0) {

            let node = `<div id="education" class="offset-top-30 offset-sm-top-30">
                      <h6 class="text-bold">ประวัติการศึกษา</h6>
                      <div class="text-subline"></div>
                      <table class="table-custom">
                      <tbody id="table-boby">
                        <tr>
                          <th style="text-align: center;">ปีที่จบ</th>
                          <th style="text-align: center;">ระดับการศึกษา</th>
                          <th style="text-align: center;">วุฒิการศึกษา</th>
                          <th style="text-align: center;">สาขาเอก</th>
                          <th style="text-align: center;">ชื่อสถาบัน</th>
                          <th style="text-align: center;">ประเทศ</th>	
                        </tr>
                      </tbody>
                      </table>
                    </div>`;
            member_content.innerHTML += node;
            let table_boby = document.getElementById("table-boby");
            
            element.education.forEach((_element) => {
              let row = document.createElement("TR");
              let arr = ["year","level","degree","branch","institution","coutry"]
              for (let i = 0; i < arr.length; i++) {
                // console.log(_element[arr[i]]);
                if (_element[i] != "") {
                  let textnode = document.createElement("TD");
                  textnode.innerHTML = `${_element[arr[i]]}`;
                  row.appendChild(textnode);
                  table_boby.appendChild(row);
                }
              }
            });
          }
          // console.log(element.specialization);
          // 3. Specialization
          if (element.specialization.length != 0) {

            let node = `<div id="specialization" class="offset-top-30 offset-sm-top-30">
                      <h6 class="text-bold">สาขาวิชาการที่มีความชำนาญเป็นพิเศษ</h6>
                      <div class="text-subline"></div>
                    </div>`;
            member_content.innerHTML += node;
            let member_specialization = document.getElementById("specialization");
            element.specialization.forEach((_element) => {
              member_specialization.innerHTML += `<p>- ${_element}</p>`
              // alert(_element)
            });
          }

          // 4. awards
          if (element.awards.length != 0) {

            let node = `<div id="awards" class="offset-top-30 offset-sm-top-30">
                      <h6 class="text-bold">ผลงานที่ผ่านมา</h6>
                      <div class="text-subline"></div>
                    </div>`;
            member_content.innerHTML += node;
            let member_awards = document.getElementById("awards");
            element.awards.forEach((_element) => {
              member_awards.innerHTML += `<p><span class="text-primary text-bold">${_element.time}</span> ${_element.name}</p>`
            });
          }

          // 5. scholarships
          if (element.scholarships.length != 0) {

            let node = `<div id="scholarships" class="offset-top-30 offset-sm-top-30">
                      <h6 class="text-bold">ทุนการศึกษา</h6>
                      <div class="text-subline"></div>
                    </div>`;
            member_content.innerHTML += node;
            let member_scholarships = document.getElementById("scholarships");
            element.scholarships.forEach((_element) => {
              member_scholarships.innerHTML += `<p><span class="text-primary text-bold">${_element.time}</span> ${_element.name}</p>`
            });
          }

          // 6. publications
          if (element.publications.length != 0) {

            let node = `<div id="publications" class="offset-top-30 offset-sm-top-30">
                      <h6 class="text-bold">บทความทางวิชาการ (บางส่วน)</h6>
                      <div class="text-subline"></div>
                    </div>`;
            member_content.innerHTML += node;
            let member_publications = document.getElementById("publications");
            element.publications.forEach((_element) => {
              member_publications.innerHTML += `<p>${_element}</p>`
            });
          }

          
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
          phone_.innerText = `${element.phone.slice(
            0,
            3
          )}-${element.phone.slice(3)}`;
          email_.href = `mailto:${element.email}`;
          email_.innerText = `${element.email}`;
        }
      });
    });
}
