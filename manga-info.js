var show_more = document.getElementById("show-more");
var show_less = document.getElementById("show-less");
var decription_content = document.getElementById("description-content");

show_more.onclick= function(){
    show_more.style.display = "none" ;
    show_less.style.display = "-webkit-box" ;
    decription_content.style.display = "block" ;
}

show_less.onclick = function(){
    show_less.style.display = "none" ;
    show_more.style.display = "-webkit-box" ;
    decription_content.style.display = "-webkit-box" ;
}

var nhanThongBao = document.getElementById("nhan-thong-bao");
nhanThongBao.onclick = function(){
    alert("Đăng nhập đi thằng lol");
}

var rating = document.getElementById("rating");
