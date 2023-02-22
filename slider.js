var left = document.getElementById("left");
var right = document.getElementById("right");
var container_slider = document.getElementsByClassName("list-photo");
var container_image_main = document.getElementById("container-image-main");
var titles = document.getElementsByTagName("h2")[1];
var background_image = new Array(
  "./assets/images/photo1.png",
  "./assets/images/photo2.jpg",
  "./assets/images/photo3.jpg",
  "./assets/images/photo4.jpg",
  "./assets/images/photo5.jpg"
);
var info = new Array(
  "Attackontitan",
  "Onepiece",
  "Fairytail",
  "Weathering with you",
  "Sword art online"
);
let i = 0;
function autoslide() {
  if (i < 4) {
    container_image_main.src = background_image[i + 1];
    container_slider[i + 1].classList.add("active");
    container_slider[i].classList.remove("active");
    titles.innerHTML = info[i + 1];
    i++;
  } else {
    container_image_main.src = background_image[0];
    container_slider[0].classList.add("active");
    container_slider[4].classList.remove("active");
    titles.innerHTML = info[0];
    i = 0;
  }
}
right.onclick = autoslide;
left.onclick = function () {
  if (i > 0) {
    container_image_main.src = background_image[i - 1];
    container_slider[i - 1].classList.add("active");
    container_slider[i].classList.remove("active");
    titles.innerHTML = info[i - 1];
    i--;
  } else {
    container_image_main.src = background_image[4];
    container_slider[4].classList.add("active");
    container_slider[0].classList.remove("active");
    titles.innerHTML = info[4];
    i = 4;
  }
};
setInterval(autoslide, 4000);

let indicators = document.getElementById("indicators").children;
for (let j = 0; j < indicators.length; j++) {
  indicators[j].addEventListener("click", () => {
    const value = parseInt(indicators[j].getAttribute("value"));
    container_image_main.src = background_image[value - 1];
    container_slider[j].classList.add("active");
    container_slider[i].classList.remove("active");
    i = j;
  });
}

// var manga_info = document.getElementById("manga-info");
function mousemove(e, i) {
  var x = e.clientX,
    y = e.clientY,
    manga_info = document.getElementById(i);
  manga_info.style.top = y + 5 + "px";
  manga_info.style.left = x + 5 + "px";
  manga_info.style.visibility = "visible";
}
function mouseout(e, i) {
  var manga_info = document.getElementById(i);
  manga_info.style.visibility = "hidden";
}

const imageHover = document.querySelectorAll("#imageHover");
imageHover.forEach((image) => {
  let parent = image.parentElement;
  let boxDetail = parent.nextElementSibling;

  image.addEventListener("mousemove", (e) => {
    let positionPage = image.getBoundingClientRect();
    let x = e.clientX,
      y = e.clientY;
    boxDetail.style.top = y - positionPage.top + 50 + "px";
    boxDetail.style.left = x - positionPage.left + 25 + "px";
    boxDetail.style.visibility = "visible";
  });
  image.addEventListener("mouseout", (e) => {
    boxDetail.style.visibility = "hidden";
  });
});
