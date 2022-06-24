function changeToRegister(){
    var dangNhap = document.getElementById("dangNhap");
    var imgdangNhap = document.getElementById("imgDangNhap");
    // imgdangNhap.style.animation = "changeImage 5s";
    imgdangNhap.classList.add("animation");
    dangNhap.style.display = "none";
    // imgdangNhap.style.transform = "scale(.7)";
    // imgdangNhap.style.transform = "translateX(calc(-100vw + 100%))";
    setTimeout(changeImg,1500);
    setTimeout(showBox,1500);
}

function changeImg(){
    var imgdangNhap = document.getElementById("imgDangNhap");
    imgdangNhap.style.transform = "translateX(calc(-100vw + 100%))";
    imgdangNhap.src = "./images/Logo-DangKy.gif";
}

function showBox(){
    var dangKy = document.getElementById("dangKy");
    dangKy.style.display = "block";
}