
function validate(){
    
    var returnVal = true;
    var email = document.getElementById("em").value;
    var password = document.getElementById("pass").value;
    document.getElementById('email').style.color = 'red';
    document.getElementById('password').style.color = 'red';
    if(email.charAt(email.length-4)!="."){
        document.getElementById('email').innerHTML = "* include '.' before domain";
        returnVal = false;
    }

    if(password.length<8){
        document.getElementById('password').innerHTML = "* password should atleast 8 character long";
        returnVal = false;
    }

    if(password.search(/[A-Z]/)< 1){
        document.getElementById('password').innerHTML = "* password should Have Capital letter";
        returnVal = false;
    }

    if(password.includes('@'||'!'||'#'||'$'||'%'||'^'||'&'||'*'||'('||')'||'<'||'>'||'?'||'/'||'{'||'}'||'.')== false){
        document.getElementById('password').innerHTML = "* Password should contain special character";
        returnVal = false;
    }

    if(email == "Hk@gmail.com" && password == "Habibkhan@123"){
        document.getElementById('password').innerHTML = '';
        window.location = "/success.html";
        return returnVal;
    }
  
}