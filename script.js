var n=document.getElementById('name');
var e1=document.getElementById('error1');
var em=document.getElementById('email');
var e2=document.getElementById('error2');
var ph=document.getElementById('phonenumber');
var e3=document.getElementById('error3');
var ps=document.getElementById('password');
var e4=document.getElementById('error4');
var e5=document.getElementById('error5');
var pd=document.getElementById('pwd');
var e6=document.getElementById('error6');




function validate(){
    let nameValid=nameValidation();
    let emailValid=emailValidation();
    let phoneValid=phoneValidation();
    let passwordValid=passwordValidation();
    let confirmpwdValid=confirmPasswordValidation();
    return nameValid && emailValid && phoneValid && passwordValid && confirmpwdValid();
}

let regex1=/(^[A-Za-z]+)$/;
function nameValidation(){
    if(regex1.test(n.value)){
        e1.innerText='Name is valid';
        e1.style.color='green';
        return true;
    }
    else{
        e1.innerText='Name is not valid';
        e1.style.color='red';
        return false;
}
}

let regex2=/^([A-Za-z0-9\-#_.]+)@([a-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3}?)$/

function emailValidation(){
    if(regex2.test(em.value)){
        e2.innerText='Email is valid';
        e2.style.color='green';
        return true;
    }
    else{
        e2.innerText='Email is not valid';
        e2.style.color='red';
        return false;
}
}

let regex3=/^(([0-9]{3}\.[0-9]{3}\.[0-9]{4}))|(([0-9]{3}\-[0-9]{3}\-[0-9]{4}))|(([0-9]{3}\s[0-9]{3}\s[0-9]{4}))|([0-9]{10})$/

function phoneValidation(){
    if(regex3.test(ph.value)){
        e3.innerText='Phone number is valid';
        e3.style.color='green';
        return true;
    }
    else{
        e3.innerText='Phone number is not valid';
        e3.style.color='red';
        return false;
}
}

let regex4=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[A-Za-z0-9].{8,}$/;
function passwordValidation(){
    if(regex4.test(ps.value) && ps.value.length >9){
        e4.innerText='Password is valid and strong';
        e4.style.color='green';
        e4.style.fontWeight='bold';
        return true;
    }
    else if(ps.value.length==9){
        e4.innerText='Password is not strong';
        e4.style.color='orange';
        e4.style.fontWeight='bold';

        return false;
    }
    else {
        e4.innerText='Password must be 8 characters long, and contain at least one uppercase letter and one lowercase letter';
        e4.style.color='red';
        e4.style.fontWeight='bold';
        return false;
}
}

function confirmPasswordValidation(){
    if(ps.value==pd.value && pd.value!==''){
        e6.innerText='Password is match';
        e6.style.color='green';
        return true;
    }
    else{
        e6.innerText='passwords do not natch';
        e6.style.color='red';
        return false;
}
}


