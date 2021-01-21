const listLastNews = document.querySelector("#listLastNews");

const title = document.querySelector("title");
const newsTitle = document.querySelector("#newsTitle");
const timeAgo = document.querySelector("#timeAgo");
const auther = document.querySelector("#auther");
const description = document.querySelector("#description");

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

    // Sort Reverse
    items.sort(function (a, b) {
      return a.datetime - b.datetime;
    });
    items = items.reverse();
    console.log(items.length);
    for (let index = 0; index < 3; index++) {
      const element = items[index];
      console.log(element);
      let node = `
          <div class="col-xs-12 col-sm-6 col-md-4 isotope-item">
          <article class="post-news">

            <a href="news-post.html?q=${element.id_name}"><img class="img-responsive" src="images/blog/news-${element.id_name}.jpg" alt=""
                width="370" height="240" /></a>
            <div class="post-news-body">
              <h6>
                <a href="news-post.html?q=${element.id_name}">
                  ${element.title}
                </a>
              </h6>
              <div class="offset-top-20">
                <p>
                  ${element.short_description}
                </p>
              </div>
              <div class="post-news-meta offset-top-20">
                <span class="icon novi-icon icon-xs mdi mdi-calendar-clock text-middle text-madison"></span><span
                  class="text-middle inset-left-10 text-italic text-black">${timeSince(element.datetime)}</span>
              </div>
            </div>
          </article>
        </div>`;
        listLastNews.innerHTML += node;
    }

    // items.forEach((element) => {
    //   // console.log(element);
    //   if (element.id_name === id) {
    //     title.innerHTML = element.title;
    //     newsTitle.innerHTML += element.title;
    //     timeAgo.innerHTML = timeSince(element.datetime);
    //     auther.innerHTML = element.auther;
    //     description.innerHTML = element.description;

    //     element.gallery.forEach((p) => {
    //       let node = `
    //       <div class="col-xs-12 col-sm-6 col-md-4 isotope-item">
    //       <article class="post-news">

    //         <a href="news-post.html?q=tcas64"><img class="img-responsive" src="images/blog/news-04-370x240.jpg" alt=""
    //             width="370" height="240" /></a>
    //         <div class="post-news-body">
    //           <h6>
    //             <a href="news-post.html?q=${id_name}">
    //               ${title}
    //             </a>
    //           </h6>
    //           <div class="offset-top-20">
    //             <p>
    //               Securing scholarships can be stressful, but parents and
    //               counselors can serve as a resource.
    //             </p>
    //           </div>
    //           <div class="post-news-meta offset-top-20">
    //             <span class="icon novi-icon icon-xs mdi mdi-calendar-clock text-middle text-madison"></span><span
    //               class="text-middle inset-left-10 text-italic text-black">3 days ago</span>
    //           </div>
    //         </div>
    //       </article>
    //     </div>`;
    //       listGallery.innerHTML += node;
    //     });
    //   }
    // });
  });
