function formvalidation1(){
    return(usernamein(username)&& passwordlogin(loginpsd);

    function usernamein(username){
        var userid = /^([a-z]+)$/;
        var username=document.getElementById("name").value.match("userid");
        
             if(test(username.value).trim()==""){
                document.getElementById("name").value.match("userid").innerHTML= "please enter a valid name";
                alert("invalid")
                return false;
             }
             else{
                document.getElementById("name").value.match("userid").innerHTML="Looks good!";
                alert("valid")
                return true;
             }
        }
      
    function passwordlogin(loginpsd){
        var loginpsd=document.getElementById("psd").value;

        if (test(loginpsd.value).trim()=="") {
            loginpsd.innerHTML="Password incorrect";
            return false;
        }

            //Regular Expressions.
        var regex = new Array();
        regexp.push("[A-Z]"); //Uppercase Alphabet.
        regexp.push("[a-z]"); //Lowercase Alphabet.
        regexp.push("[0-9]"); //Digit.
        regexp.push("[.-_@!#?]"); //Special Character.

            var pass = 0;

            //for each Regular Expression validation.
            for (var i = 0; i <=regex.length; i++) {
            if (new RegExp(regex[i]).test(loginpsd)) {
            pass++;
            }
            }

            //Validate for length of Password.
            if (loginpsd.length >=8) {
            pass++;
            }

            //display pattern
            var color = "";
            var strength = "";
            switch (passed){
            case 0:
            case 1:
            strength = "Poor";
            color = "red";
            case 2:
            strength = "Medium";
            color = "orange";
            case 3:
            strength = "Strong";
            color = "green";
            break;
            }
            loginpsd.innerHTML = strength;
            loginpsd.style.color = color;
    }
}

function formvalidation2(){
    return(firstnamein(fname)&& lastnamein(lname)&&Username(usrname)&&contactnumber(contact)&&Email(emailid)&&passwordin(pwd))

    function firstnamein(fname){

            var name1 = /^([A-Z]+)$/;
            var fname = document.getElementById("firstname").value.match("name1");
        
            if(test(fname.value).trim()==""){
                fname.innerHTML= "please enter a valid name";
                alert("invalid")
                return false;
            }
            else{
                fname.innerHTML="Looks good!";
                alert("valid")
                return true;
            }
    }

    function lastnamein(lname){
            var name2 = /^([A-Z]+)$/;
            var lname = document.getElementById("Last name").value.match("name2");
         
            if(test(lname.value).trim()==""){
                 lname.innerHTML= "please enter a valid name";
                 alert("invalid")
                 return false;
            }
            else{
                 document.getElementById("Last name").value.match("name2").innerHTML="Looks good!";
                 alert("valid")
                 return true;
            }
    }

    function Username(usrname){
            var usrname=document.getElementById("name").value.match("userid");
            
            if(test(usrname.value).trim()==""){
                document.getElementById("name").value.match("userid").innerHTML= "please enter a valid name";
                alert("invalid")
                return false;
            }
            else{
                    document.getElementById("name").value.match("userid").innerHTML="Looks good!";
                    alert("valid")
                    return true;
                 }
    }

    function contactnumber(contact){  
            var phnfmt = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            var contact= document.getElementById("phn").value.match("phnfmt"); 

                 if(contact.value.match(phnfmt))
                    {
                      return true;      
                    }
                  else
                    {
                      alert("Not a valid Phone Number");
                      return false;
                    }
    }

    function Email(emailid){  
            var emailid= document.getElementById("InputEmail").value.match("email");

                if(test(emailid.value).trim()==""){
                    emailid.innerHTML="invalid EmailId";
                    alert("Please provide a valid email id");
                    emailid.style.border = "2px solid red";
                    return false;
                }
                 else{
                    emailid.innerHTML="Valid";
                    alert("Looks good!");
                    return true;
                }
    }
    function passwordin(pwd){
            var pwd=document.getElementById("psd").value;

                if (test(pwd.value).trim()=="") {
                     pwd.innerHTML="Password incorrect";
                    return false;
                }
    
                //Regular Expressions.
                var regex = new Array();
                    regexp.push("[A-Z]"); //Uppercase Alphabet.
                    regexp.push("[a-z]"); //Lowercase Alphabet.
                    regexp.push("[0-9]"); //Digit.
                    regexp.push("[.-_@!#?]"); //Special Character.
    
                var pass = 0;
    
                //for each Regular Expression validation.
                for (var i = 0; i <=regex.length; i++) {
                if (new RegExp(regex[i]).test(pwd)) {
                pass++;
                }
                }
    
                //Validate for length of Password.
                if (pwd.length >=8) {
                pass++;
                }
    
                //display pattern
                var color = "";
                var strength = "";
                switch (passed){
                case 0:
                case 1:
                strength = "Poor";
                color = "red";
                case 2:
                strength = "Medium";
                color = "orange";
                case 3:
                strength = "Strong";
                color = "green";
                break;
                }
                pwd.innerHTML = strength;
                pwd.style.color = color;
            }
    }
}

