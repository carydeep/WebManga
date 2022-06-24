function lockAndUnlock(e){
        e.classList.toggle("fa-unlock-alt");
        e.classList.toggle("fa-lock");
};

function editUser(e){
        var tr = e.parentElement.parentElement.parentElement;
        var lengthChild = tr.children.length;
        var child = tr.children;
        // var inputTypeBirday = document.createElement("input");
        // inputTypeBirday.setAttribute('type','date');
        // inputTypeBirday.style.width = child[3].offsetWidth - (child[3].clientLeft * 2)+'px';
        // inputTypeBirday.style.height = child[3].offsetHeight - (child[3].clientTop * 2)+'px';
        // var defauleDate = child[3].innerText;
        // console.log(defauleDate);
        // inputTypeBirday.defaultValue = defauleDate;

        // var defaultSex = child[4].innerText;
        // var inputTypeOption = document.createElement("select");
        // var selectoption1 = document.createElement("option");
        // selectoption1.setAttribute('value','Nam');
        // selectoption1.innerHTML = "Nam";
        // var selectoption2 = document.createElement("option");
        // selectoption2.setAttribute('value','Nu');
        // selectoption2.innerHTML = "Nữ";
        // var selectoption2 = document.createElement("option");
        // selectoption2.setAttribute('value','Khac');
        // selectoption2.innerHTML = "Khác";

        // inputTypeOption.style.width = child[4].offsetWidth - (child[4].clientLeft * 2)+'px';
        // inputTypeOption.style.height = child[4].offsetHeight - (child[4].clientTop * 2)+'px';
        // inputTypeOption.appendChild(selectoption1);
        // inputTypeOption.appendChild(selectoption2);

        // var inputTypeGmail = document.createElement('input');
        // inputTypeGmail.setAttribute('type','email');
        // inputTypeGmail.style.width = child[5].offsetWidth - (child[5].clientLeft * 2)+'px';
        // inputTypeGmail.style.height = child[5].offsetHeight - (child[5].clientTop * 2)+'px';


        for(var i = 1;i<lengthChild-5;i++){
                child[i].setAttribute("contenteditable","true");
        }

        // child[3].innerHTML = '';
        // child[3].append(inputTypeBirday);

        // child[4].innerHTML = '';
        // child[4].append(inputTypeOption);

        // child[5].innerHTML = '';
        // child[5].append(inputTypeGmail);

        // inputTypeBirday.onblur = function(){
        //         var td  = inputTypeBirday.parentElement;
        //         td.innerHTML = inputTypeBirday.value;
        // }

        var funct = e.parentElement.parentElement;
        var childfunct = funct.children;
        for(var j = 0;j<childfunct.length-2;j++){
                childfunct[j].style.display = "none";
        }
        childfunct[3].style.display = "inline-block";
        childfunct[4].style.display = "inline-block";
}

function saveUser(e){
        var tr = e.parentElement.parentElement.parentElement;
        var lengthChild = tr.children.length;
        var child = tr.children;
        
        for(var i = 1;i<lengthChild-5;i++){
                child[i].setAttribute("contenteditable","false");
        }
        
        var funct = e.parentElement.parentElement;
        var childfunct = funct.children;
        for(var j = 0;j<childfunct.length-2;j++){
                childfunct[j].style.display = "inline-block";
        }
        childfunct[3].style.display = "none";
        childfunct[4].style.display = "none";
}

function cancelUser(e){
        var tr = e.parentElement.parentElement.parentElement;
        var lengthChild = tr.children.length;
        var child = tr.children;
        for(var i = 1;i<lengthChild-5;i++){
                child[i].setAttribute("contenteditable","false");
        }
        var funct = e.parentElement.parentElement;
        var childfunct = funct.children;
        for(var j = 0;j<childfunct.length-2;j++){
                childfunct[j].style.display = "inline-block";
        }
        childfunct[3].style.display = "none";
        childfunct[4].style.display = "none";
}

function showMoreRule(e){
        e.nextElementSibling.classList.add('show');
}

function removeRole(e){
        e.parentElement.remove();
        var x=  e.nextElementSibling.innerText;
        var p = document.createElement('p');
        p.setAttribute('onclick',"addRole(this)");
        p.innerHTML = x;
        document.getElementById("more-role").appendChild(p);
}

function createRole(e){
        var div =document.createElement('div');
        var p = document.createElement('p');
        var i = document.createElement('i');
        div.classList.add('role');
        i.classList.add('fa');
        i.classList.add('fa-trash-o');
        i.setAttribute('onclick','deleteRole(this)');
        p.innerHTML = "@everyone";
        div.appendChild(p);
        div.appendChild(i);
        var x = e.parentElement.parentElement;
        x.appendChild(div);
}

function deleteRole(e){
        e.parentElement.remove();
}

function addRole(e){
        var role = e.parentElement.parentElement.parentElement;
        var getRole = e.innerText;
        var div = document.createElement('div');
        div.classList.add('your-role');
        var divChild = document.createElement('div');
        divChild.setAttribute('onclick','removeRole(this)');
        divChild.classList.add('delete-role');
        var p = document.createElement('p');
        p.innerHTML = getRole;
        div.appendChild(divChild);
        div.appendChild(p);
        role.insertBefore(div,role.firstChild);
        e.remove();
}

function cancelPopUp(e){
        var x = e.parentElement.parentElement;
        x.style.display = "none";
}

function showPopUp(){
        document.getElementById("box-modal").style.display = "block";
}

function showPopUpManga(){
        document.getElementById("manga-info").style.display = "block";
}

function changePemission(e){
        var parent = e.parentElement.parentElement.parentElement;
        // if(parent.getAttribute("role-input")==1){
        //         parent.classList.add(ban);
        // }else{
                
        // }
        if(e.classList.contains('fa-toggle-on')){
                parent.setAttribute('role-input',"1");
                e.classList.remove('fa-toggle-on');
                e.classList.add('fa-toggle-off');
        }else{
                parent.setAttribute('role-input','-1')
                e.classList.add('fa-toggle-on');
                e.classList.remove('fa-toggle-off');
        }
}

function changePemission1(e){
        var form = e.parentElement;
        var childform = form.children;
        for(var i=0;i<childform.length;i++){
                childform[i].classList.remove('check');
        }
        e.classList.add('check');
}

// function denyAllow(e){
//         var parent = e.parentElement.parentElement.parentElement;
//         parent.setAttribute('role-input','0');
// }

function chooseVaiTro(e){
        var vaiTro = document.getElementById("vaiTro");
        var quanLyUser = document.getElementById("quanLyUser");
        var GeneralWeb = document.getElementById('generalWeb');
        var quanLyManga = document.getElementById("managerManga");
        quanLyManga.style.display = "none";
        GeneralWeb.style.display = "none";
        vaiTro.style.display = "grid";
        var ul = e.parentElement;
        var childUl = ul.children;
        for(var i = 0; i<childUl.length;i++){
                childUl[i].classList.remove('check');
        }
        e.classList.add('check');
        quanLyUser.style.display = "none";
}

function chooseManga(e){
        var vaiTro = document.getElementById("vaiTro");
        var quanLyUser = document.getElementById("quanLyUser");
        var GeneralWeb = document.getElementById('generalWeb');
        var quanLyManga = document.getElementById("managerManga");
        quanLyManga.style.display = "grid"
        GeneralWeb.style.display = "none";
        vaiTro.style.display = "none";
        var ul = e.parentElement;
        var childUl = ul.children;
        for(var i = 0; i<childUl.length;i++){
                childUl[i].classList.remove('check');
        }
        e.classList.add('check');
        quanLyUser.style.display = "none";
}

function chooseGeneral(e){
        var vaiTro = document.getElementById("vaiTro");
        var quanLyUser = document.getElementById("quanLyUser");
        var GeneralWeb = document.getElementById('generalWeb');
        var quanLyManga = document.getElementById("managerManga");
        quanLyManga.style.display = "none";
        GeneralWeb.style.display = "grid";
        vaiTro.style.display = "none";
        var ul = e.parentElement;
        var childUl = ul.children;
        for(var i = 0; i<childUl.length;i++){
                childUl[i].classList.remove('check');
        }
        e.classList.add('check');
        quanLyUser.style.display = "none";
}

function chooseQuanLy(e){
        var vaiTro = document.getElementById("vaiTro");
        var quanLyUser = document.getElementById("quanLyUser");
        var GeneralWeb = document.getElementById('generalWeb');
        var quanLyManga = document.getElementById("managerManga");
        quanLyManga.style.display = "none";
        GeneralWeb.style.display = "none";
        vaiTro.style.display = "none";
        quanLyUser.style.display = "grid";
        
        var ul = e.parentElement;
        var childUl = ul.children;
        for(var i = 0; i<childUl.length;i++){
                childUl[i].classList.remove('check');
        }
        e.classList.add('check');
}

document.addEventListener('mouseup',function(e){
        var notice = document.getElementById("more-role");
        if(!notice.contains(e.target)){
            notice.classList.remove("show");
        }
})