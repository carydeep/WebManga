function show_search() {
  if (window.matchMedia("(min-width: 400px)").matches) {
    document.getElementById("search").classList.toggle('hide');
    document.getElementById("icon_search").classList.toggle('nomal-size');
  }
}

function show_bar_content() {
  document.getElementById("bar").classList.toggle("show-bar-hide-content");
}

function show_bar_type() {
  document.getElementById("type").classList.toggle("hide");
  var count = document.getElementById("list-type").childElementCount;
  var x = -~(count / 9);
  if (x > 1) {
    document.getElementById("type").style.width = (x * 170) + "px";
  } else {
    document.getElementById("type").style.width = "170px";
  }
}

// var user_comment = document.getElementsByClassName("user-comment");
// function drawLine() {
//   for (var i = 0; i < user_comment.length; i++) {
//     var with_line = 0;
//     var comment = user_comment[i].getElementsByClassName("comment");
//     var rely_comment = user_comment[i].getElementsByClassName("rely-comment");
//     for (var j = 0; j < rely_comment.length; j++) {
//       var sub_comment = rely_comment[j].getElementsByClassName("comment");
//       var sub_your_comment = rely_comment[j].getElementsByClassName("your-comment");
//       with_line += rely_comment[j].offsetHeight + 7;
//       for (k = 0; k < sub_comment.length; k++) {
//         var div = document.createElement('div');
//         div.classList.add('line');
//         sub_comment[k].appendChild(div);
//       }
//       if(sub_your_comment.length != 0){
//         with_line -= sub_your_comment[0].offsetHeight;
//       }
//     }
//     if (rely_comment.length != 0) {
//       with_line -= sub_comment[sub_comment.length - 1].offsetHeight;
//       var div_1 = document.createElement('div');
//       div_1.classList.add("line-comment");
//       div_1.style.height = with_line + 'px';
//       comment[0].appendChild(div_1);
//     }
//   }
// }
// drawLine();


var search = document.getElementById("search");
search.oninput = function(){
  var search_hint = search.nextElementSibling.nextElementSibling;
  if(search.value!=''){
    search_hint.classList.add("show");
  }else{
    search_hint.classList.remove("show");
  }
}

function changeView(){
  var containerSlider = document.getElementById("container").children;
  containerSlider[0].remove();
  // var canvas = document.createElement('canvas');
  // canvas.setAttribute("id","canvas");
  // document.getElementById("container").appendChild(canvas);
  // document.getElementById("container").innerHTML = '<canvas id="canvas"></canvas>';
}

const faders = document.querySelectorAll('.fade-in');
const from_left = document.querySelectorAll('.from-left');
const from_right = document.querySelectorAll('.from-right');

const appearOptions = {
  threshold:0,
  rootMargin: "0px 0px -150px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }else{
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    })
},appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})

from_left.forEach(fromLeft => {
  appearOnScroll.observe(fromLeft);
})

from_right.forEach(fromRight => {
  appearOnScroll.observe(fromRight);
})
