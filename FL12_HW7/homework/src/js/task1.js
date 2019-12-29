// Your code goes here
var mail=prompt("enter your email","");
var password="";
if(mail.length===0 || mail===null){
    alert("Canceled");
}else if(mail.length<5){
    alert("I don't know any emails having name length less than 5 symbols");
}else if(mail==="user@gmail.com" || mail==="admin@gmail.com"){
    password= prompt("pleas enter password","");
    if(password.length===0 || password===null){
        alert("Canseled");
    }else if(mail==="user@gmail.com" && password==="UserPass" ||
     mail==="admin@gmail.com" && password==="AdminPass"){
        var ChangePassword=confirm("Do you want to change your password");
        if (ChangePassword===false){
            alert("You have failed the change.");
        }else{
            password=prompt("pleas write youe old password","");

            if(mail==="user@gmail.com" && password==="UserPass" ||
             mail==="admin@gmail.com" && password==="AdminPass"){
                 password=prompt("enter new password","");

                 if(password.length===0 ||password===null){
                     alert("Canseled");

                 }else if(password.length<6){
                     alert("It’s too short password. Sorry.");
                 }else{
                     var passwordAgain=prompt("enter it again","");
                     if(password!==passwordAgain){
                        alert("You wrote the wrong password.")
                     }else{
                         alert("You have successfully changed your password.")
                     }


                 }
                 
             }
        }
    }else{
        alert("Wrong password");
    }
}else{
    alert("I don’t know you");
}