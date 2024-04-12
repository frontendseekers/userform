
function validateform(){
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
if (name==null||name==""){
    alert("Name can't be blank");
    return false;
}
else if(address==null||address==""){
    alert("address can't be blank");
    return false;
}
else if(email==null||email=="" ){
    alert("email can't be blank");
    return false;
}
else if(password.length<6){
    alert("Password must be at least 6 character long.");
    return false;
}
let nid = document.getElementById("nid");
nid.innerHTML = name;
let eid = document.getElementById("eid");
eid.innerHTML = email;
let aid = document.getElementById("aid");
aid.innerHTML = address;
let pid = document.getElementById("pid");
pid.innerHTML = password;
}
