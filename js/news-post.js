const listGallery = document.querySelector("#listGallery");

const title = document.querySelector("title");
const newsTitle = document.querySelector("#newsTitle");
const timeAgo = document.querySelector("#timeAgo");
const auther = document.querySelector("#auther");
const description = document.querySelector("#description");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("q");
// console.log(id);

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

// News
fetch("../data_json/news.json")
  .then((response) => response.json())
  .then((data) => {
    let items = data.items;
    items.forEach((element) => {
      // console.log(element);
      if (element.id_name === id) {
        title.innerHTML = element.title;
        newsTitle.innerHTML += element.title;
        timeAgo.innerHTML = timeSince(element.datetime);
        auther.innerHTML = element.auther;
        description.innerHTML = element.description;
        element.gallery.forEach((p) => {
          let node = `
            <div class="cell-6"><a class="thumbnail-default"
                    href="images/portfolio/gallery-10-1200x800-original.jpg"
                    data-lightgallery="item">
                    <img src="images/portfolio/gallery-10-320x320.jpg" alt="" width="320"
                        height="320">
                    <span class="icon novi-icon fa-search-plus"></span>
                </a>
            </div>`;
            listGallery.innerHTML += node;
          
        });
      }
    });
  });
