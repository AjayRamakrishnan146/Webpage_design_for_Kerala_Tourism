var em=document.getElementById('email');
var e1=document.getElementById('error1');
var ps=document.getElementById('psd');
var e2=document.getElementById('error2');
var e3=document.getElementById('error3');

function validation(){
    let emailValid=emailValidation();
    let passwordValid=passwordValidation();
    return emailValid && passwordValid ;
}

let regex1=/^([A-Za-z0-9\-#_.]+)@([a-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3}?)$/

function emailValidation(){
    if(regex1.test(em.value)){
        e1.innerText='Email is valid';
        e1.style.color='green';
        return true;
    }
    else{
        e1.innerText='Email is not valid';
        e1.style.color='red';
        return false;
}
}
let regex2=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
function passwordValidation(){
    if(regex2.test(ps.value) && ps.value.length >9){
        e2.innerText='Password is valid and strong';
        e2.style.color='green';
        e2.style.fontWeight='bold';
        return true;
    }
    else if(ps.value.length==9){
        e2.innerText='Password is not strong';
        e2.style.color='orange';
        e2.style.fontWeight='bold';

        return false;
    }
    else {
        e2.innerText='Password must be 8 characters long, and contain at least one uppercase letter and one lowercase letter';
        e2.style.color='red';
        e2.style.fontWeight='bold';
        return false;
}
}