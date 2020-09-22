var divs = new Array();
divs[0] = "** Please fill this field or it's not vaild";
divs[1] = "** only characters are allowed";
divs[2] = "** Please enter validate date";

function validatefname() {
    var Fuser = document.getElementById('fname').value;
    var regName = /^[A-Za-z_ ]+$/;
    if (Fuser == "" || Fuser.length < 2) {
        document.getElementById('errfname').style.display = "block";

        document.getElementById('errfname').innerHTML = divs[0];
        return false;
    } else if (!Fuser.match(regName)) {
        document.getElementById('errfname').style.display = "block";
        document.getElementById('errfname').innerHTML = divs[1];
        return false;
    } else {
        document.getElementById('errfname').style.display = "none";
        return true;
    }
}

function validatelname() {
    var Fuser = document.getElementById('lname').value;
    var regName = /^[A-Za-z_ ]+$/;
    if (Fuser == "" || Fuser.length < 2) {
        document.getElementById('errlname').style.display = "block";

        document.getElementById('errlname').innerHTML = divs[0];
        return false;
    } else if (!Fuser.match(regName)) {
        document.getElementById('errlname').style.display = "block";
        document.getElementById('errlname').innerHTML = divs[1];
        return false;
    } else {
        document.getElementById('errlname').style.display = "none";
        return true;
    }
}

function validatespci() {
    var Fuser = document.getElementById('spci').value;
    var regName = /^[A-Za-z-_ ]+$/;
    if (Fuser == "" || Fuser.length < 2) {
        document.getElementById('errspci').style.display = "block";

        document.getElementById('errspci').innerHTML = divs[0];
        return false;
    } else if (!Fuser.match(regName)) {
        document.getElementById('errspci').style.display = "block";
        document.getElementById('errspci').innerHTML = divs[1];
        return false;
    } else {
        document.getElementById('errspci').style.display = "none";
        return true;
    }
}

function validatedsc() {
    var Fuser = document.getElementById('dsc').value;
    var regName = /^[A-Za-z-_ ]+$/;
    if (Fuser == "" || Fuser.length < 2) {
        document.getElementById('errdsc').style.display = "block";

        document.getElementById('errdsc').innerHTML = divs[0];
        return false;
    } else if (!Fuser.match(regName)) {
        document.getElementById('errdsc').style.display = "block";
        document.getElementById('errdsc').innerHTML = divs[1];
        return false;
    } else {
        document.getElementById('errdsc').style.display = "none";
        return true;
    }
}
function validatedate()
{
    var Fuser = document.getElementById('date').value;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var month;
    
    if(Fuser.slice(0,4) > yyyy)
    {
        document.getElementById('errdate').style.display = "block";
        document.getElementById('errdate').innerHTML = divs[2];
        return false;
    }
    else if(Fuser.slice(5,7)> mm)
    {
        document.getElementById('errdate').style.display = "block";
        document.getElementById('errdate').innerHTML = divs[2];
        return false;
    }
    else if(Fuser.slice(8,10) > dd)
    {
        document.getElementById('errdate').style.display = "block";
        document.getElementById('errdate').innerHTML = divs[2];
        return false;
    }
    else
    {
        document.getElementById('errdate').style.display = "none";
        return true;
    }
}