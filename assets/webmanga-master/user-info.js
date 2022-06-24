var profile_info = document.getElementById("profile-info");
var change_pass = document.getElementById("change-password");
var change_profile = document.getElementById("change-profile");
var thongTinCaNhan = document.getElementById("thong-tin-ca-nhan");
var doiMatKhau = document.getElementById("doi-mat-khau");
var doiThongTin = document.getElementById("doi-thong-tin-ca-nhan");

thongTinCaNhan.onclick = function(){
    profile_info.style.transform = "translateY(0)";
    change_pass.style.transform = "translateY(0)";
    change_profile.style.transform = "translateY(0)";
    thongTinCaNhan.classList.add("active");
    doiMatKhau.classList.remove("active");
    doiThongTin.classList.remove("active");
}

doiMatKhau.onclick = function(){
    profile_info.style.transform = "translateY(-100%)";
    change_pass.style.transform = "translateY(-100%)";
    change_profile.style.transform = "translateY(-100%)";
    doiMatKhau.classList.add("active");
    thongTinCaNhan.classList.remove("active");
    doiThongTin.classList.remove("active");
}

doiThongTin.onclick = function(){
    profile_info.style.transform = "translateY(-200%)";
    change_pass.style.transform = "translateY(-200%)";
    change_profile.style.transform = "translateY(-200%)";
    doiMatKhau.classList.remove("active");
    thongTinCaNhan.classList.remove("active");
    doiThongTin.classList.add("active");
}

var image_url = document.getElementById("image-url");
var url_filename = document.getElementById("url-filename");
var anhDaiDien = document.getElementById("anhDaiDien");

image_url.addEventListener("change",function(e){
    var fileReader = new FileReader();
    fileReader.readAsDataURL(image_url.files[0]);
    url_filename.textContent = e.target.files[0].name;
    
    fileReader.onload = function(fileReader){
        anhDaiDien.src = fileReader.target.result;
    }
})

function loading_button(e,text){
    var icon_load = e.getElementsByTagName("i")[0];
    icon_load.classList.add("fa");
    icon_load.classList.add("fa-spinner");
    setTimeout(()=>{
        icon_load.classList.remove("fa-spinner");
        icon_load.classList.add("fa-times-circle-o");
    },4000);
    setTimeout(() =>{
        icon_load.classList.remove("fa-times-circle-o");
        alert(text);
    },6000);
}

var change_email = document.getElementById("change-email");
var change_email_1 = document.getElementById("change-email-1");

change_email.onclick = function(){
    var get_form = change_pass.getElementsByTagName("form")[1];
    get_form.getElementsByTagName("p")[1].style.display = "block";
    get_form.getElementsByTagName("input")[1].style.display = "unset";
    change_email.style.display = "none";
    change_email_1.style.display = "block";
}


