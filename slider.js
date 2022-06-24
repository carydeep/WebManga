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
)
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
  }
  else {
    container_image_main.src = background_image[4];
    container_slider[4].classList.add("active");
    container_slider[0].classList.remove("active");
    titles.innerHTML = info[4];
    i = 4;
  }
}
setInterval(autoslide, 3000);

// var manga_info = document.getElementById("manga-info");
function mousemove(e, i) {
  var x = e.offsetX,
    y = e.offsetY,
    manga_info = document.getElementById(i);
  manga_info.style.top = (y + 50) + 'px';
  manga_info.style.left = (x + 50) + 'px';
  manga_info.style.visibility = "visible";
}
function mouseout(e, i) {
  var manga_info = document.getElementById(i);
  manga_info.style.visibility = "hidden";
}