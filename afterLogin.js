function showNotice(){
    var notice = document.getElementById("notification");
    notice.classList.add("show");
}

document.addEventListener('mouseup',function(e){
    var notice = document.getElementById("notification");
    if(!notice.contains(e.target)){
        notice.classList.remove("show");
    }
})

function editComment(e){
    var x = e.parentElement.previousElementSibling;
    var p = x.getElementsByTagName("p")[0];
    var textComment = p.textContent;
    p.style.display = "none";
    e.previousElementSibling.style.display = "none";
    e.style.display = "none";
    var textArea = document.createElement("textarea");
    textArea.innerText = textComment;
    var div = document.createElement("div");
    div.classList.add("function-edit");
    var button1 = document.createElement("button");
    button1.innerText = "Lưu";
    button1.setAttribute("onclick","save(this)");
    var button2 = document.createElement("button");
    button2.innerText = "Hủy";
    button2.setAttribute("onclick","cancel(this)");
    div.appendChild(button1);
    div.appendChild(button2);
    x.appendChild(textArea);
    x.appendChild(div);
}

function cancel(e){
    var hyphen = e.parentElement.parentElement.nextElementSibling.children[1];
    hyphen.style.display = "block";
    var edit = e.parentElement.parentElement.nextElementSibling.children[2];
    edit.style.display = "block";
    e.parentElement.previousElementSibling.previousElementSibling.style.display = "inline-block";
    var textArea = e.parentElement.previousElementSibling;
    var functionEdit = e.parentElement;
    textArea.remove();
    functionEdit.remove();
}

function save(e){
    var hyphen = e.parentElement.parentElement.nextElementSibling.children[1];
    hyphen.style.display = "block";
    var edit = e.parentElement.parentElement.nextElementSibling.children[2];
    edit.style.display = "block";
    var textInput = e.parentElement.previousElementSibling.value;
    e.parentElement.previousElementSibling.previousElementSibling.style.display = "inline-block";
    e.parentElement.previousElementSibling.previousElementSibling.innerHTML = textInput;
    var textArea = e.parentElement.previousElementSibling;
    var functionEdit = e.parentElement;
    textArea.remove();
    functionEdit.remove();
}

function seen(e,link){
    window.location = link;
    e.children[1].classList.remove("new");
}
