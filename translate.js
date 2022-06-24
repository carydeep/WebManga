window.addEventListener('scroll',function(e){
    const target = document.querySelectorAll('.translate');
    var scroll = window.pageYOffset;

    var index = 0,length =target.length;
    for(index;index<length;index++){
        var pos =window.pageYOffset * target[index].dataset.rate;
        if(target[index].dataset.direction ==='vertical'){
            target[index].style.transform = 'translate3d(0px,'+pos+'px,0px)';
        }else{
            var posX =window.pageYOffset * target[index].dataset.ratex;
            var posY =window.pageYOffset * target[index].dataset.ratey;
            target[index].style.transform = 'translate3d('+posX+'px,'+posY+'px,0px)';
        }
        

    }
});

// var upload = document.getElementById("upload");
// var popup_upload = document.getElementById("popup_upload");
// var notification = document.getElementById("popup");
// var messenger = document.getElementById("popup_mess");
// var notice = document.getElementById("notice");
// var mess = document.getElementById("mess");
// var more_info = document.getElementById("more_info");
// var info = document.getElementById("popup_moreInfo");
// var box_info = document.getElementById("box_info");
// var ellipsis = document.getElementById("ellipsis");
// var popup_ellip = document.getElementById("popup-ellipsis");
// var ellipsis2 = document.getElementById("ellipsis2");
// var popup_ellip2 = document.getElementById("popup-ellipsis2");
// var ellipsis3 = document.getElementById("ellipsis3");
// var popup_ellip3 = document.getElementById("popup-ellipsis3");
// var ellipsis4 = document.getElementById("ellipsis4");
// var popup_ellip4 = document.getElementById("popup-ellipsis4");
// var ellipsis5 = document.getElementById("ellipsis5");
// var popup_ellip5 = document.getElementById("popup-ellipsis5");
// var ellipsis6 = document.getElementById("ellipsis6");
// var popup_ellip6 = document.getElementById("popup-ellipsis6");
// var ellipsis7 = document.getElementById("ellipsis7");
// var popup_ellip7 = document.getElementById("popup-ellipsis7");
// var ellipsis8 = document.getElementById("ellipsis8");
// var popup_ellip8 = document.getElementById("popup-ellipsis8");
// var ellipsis9 = document.getElementById("ellipsis9");
// var popup_ellip9 = document.getElementById("popup-ellipsis9");
// var ellipsis10 = document.getElementById("ellipsis10");
// var popup_ellip10 = document.getElementById("popup-ellipsis10");
// var ellipsis11 = document.getElementById("ellipsis11");
// var popup_ellip11 = document.getElementById("popup-ellipsis11");
// var ellipsis12 = document.getElementById("ellipsis12");
// var popup_ellip12 = document.getElementById("popup-ellipsis12");
// var ellipsis13 = document.getElementById("ellipsis13");
// var popup_ellip13 = document.getElementById("popup-ellipsis13");

// window.onclick = function(event) {
//     if(event.target == upload) {
//         popup_upload.classList.toggle("show");
//     }else{
//         popup_upload.classList.remove("show");
//     }
//     if (event.target == notice) {
//         notification.classList.toggle("show");
//     }else if(event.target != notice && event.target.parentNode != notification){
//         notification.classList.remove("show");
//     }

//     if(event.target == mess){
//         messenger.classList.toggle("show");
//     }else{
//         messenger.classList.remove("show");
//     }
//     if(event.target == more_info){
//         info.classList.toggle("show");
//     }else if(event.target != box_info){
//         info.classList.remove("show");
//     }
//     if(event.target == ellipsis){
//         popup_ellip.classList.toggle("show");
//     }else{
//         popup_ellip.classList.remove("show");
//     }
//     if(event.target == ellipsis2){
//         popup_ellip2.classList.toggle("show");
//     }else{
//         popup_ellip2.classList.remove("show");
//     }
//     if(event.target == ellipsis3){
//         popup_ellip3.classList.toggle("show");
//     }else{
//         popup_ellip3.classList.remove("show");
//     }
//     if(event.target == ellipsis4){
//         popup_ellip4.classList.toggle("show");
//     }else{
//         popup_ellip4.classList.remove("show");
//     }
//     if(event.target == ellipsis5){
//         popup_ellip5.classList.toggle("show");
//     }else{
//         popup_ellip5.classList.remove("show");
//     }
//     if(event.target == ellipsis6){
//         popup_ellip6.classList.toggle("show");
//     }else{
//         popup_ellip6.classList.remove("show");
//     }
//     if(event.target == ellipsis7){
//         popup_ellip7.classList.toggle("show");
//     }else{
//         popup_ellip7.classList.remove("show");
//     }
//     if(event.target == ellipsis8){
//         popup_ellip8.classList.toggle("show");
//     }else{
//         popup_ellip8.classList.remove("show");
//     }
//     if(event.target == ellipsis9){
//         popup_ellip9.classList.toggle("show");
//     }else{
//         popup_ellip9.classList.remove("show");
//     }
//     if(event.target == ellipsis10){
//         popup_ellip10.classList.toggle("show");
//     }else{
//         popup_ellip10.classList.remove("show");
//     }
//     if(event.target == ellipsis11){
//         popup_ellip11.classList.toggle("show");
//     }else{
//         popup_ellip11.classList.remove("show");
//     }
//     if(event.target == ellipsis12){
//         popup_ellip12.classList.toggle("show");
//     }else{
//         popup_ellip12.classList.remove("show");
//     }
//     if(event.target == ellipsis13){
//         popup_ellip13.classList.toggle("show");
//     }else{
//         popup_ellip13.classList.remove("show");
//     }
// }


