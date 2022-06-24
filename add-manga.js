var image_title = document.getElementById("image-title");
var url_filename_title = document.getElementById("url-filename-title");
var anhBia = document.getElementById("anhBia");

image_title.addEventListener("change",function(e){
    var fileReader = new FileReader();
    fileReader.readAsDataURL(image_title.files[0]);
    url_filename_title.textContent = e.target.files[0].name;

    fileReader.onload = function(fileReader){
        anhBia.src = fileReader.target.result;
    }
})

var image_background = document.getElementById("image-background");
var url_filename_background = document.getElementById("url-filename-background");
var anhNen = document.getElementById("anhNen");

image_background.addEventListener("change",function(e){
    var fileReader = new FileReader();
    fileReader.readAsDataURL(image_background.files[0]);
    url_filename_background.textContent = e.target.files[0].name;

    fileReader.onload = function(fileReader){
        anhNen.src = fileReader.target.result;
    }
})

var image_manga = document.getElementById("image-manga");
var url_filename_manga = document.getElementById("url-filename-manga");
var listImage = document.getElementById("list-image");

image_manga.addEventListener("change",function(e){
    if(e.target.files.length < 2){
        url_filename_manga.textContent = e.target.files[0].name;
    }else{
        url_filename_manga.textContent = e.target.files.length + " files ";
    }
})

var image_title_edit = document.getElementById("image-title-edit");
var url_filename_title_edit = document.getElementById("url-filename-title-edit");
var anhBia_edit = document.getElementById("anhBia-edit");

image_title_edit.addEventListener("change",function(e){
    var fileReader = new FileReader();
    fileReader.readAsDataURL(image_title_edit.files[0]);
    url_filename_title_edit.textContent = e.target.files[0].name;

    fileReader.onload = function(fileReader){
        anhBia_edit.src = fileReader.target.result;
    }
})

var image_manga_edit = document.getElementById("image-manga-edit");
var url_filename_manga_edit = document.getElementById("url-filename-manga-edit");
var listImage_edit = document.getElementById("list-image-edit");

image_manga_edit.addEventListener("change",function(e){
    if(e.target.files.length < 2){
        url_filename_manga_edit.textContent = e.target.files[0].name;
    }else{
        url_filename_manga_edit.textContent = e.target.files.length + " files ";
    }

    for(i=0;i<e.target.files.length;i++){
        var image = document.createElement("img");
        var sup = document.createElement("sup");
        var input_image_edit = document.createElement("input");
        var input_display_file = image_manga_edit.files[i];
        var fileReader = new FileReader();
        fileReader.readAsDataURL(input_display_file);
        fileReader.onload = function(fileReader){
            image.src = fileReader.target.result;
            mang[i] = fileReader.target.result;
        }

        input_image_edit.type = "file";
        input_image_edit.name = "chapter_img[]";
        input_image_edit.style.display = "none";
        input_image_edit.file = input_display_file.files[i];
        sup.classList.add("fa");
        sup.classList.add("fa-close");
        sup.onclick = function(){
            listImage_edit.removeChild(image);
            listImage_edit.removeChild(sup);
            listImage_edit.removeChild(input_image_edit);
        }
        listImage_edit.appendChild(image);
        listImage_edit.appendChild(sup);
        listImage_edit.appendChild(input_image_edit);
    }
})

