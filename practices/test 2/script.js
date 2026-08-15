  var email = true;
  var facebook = false;
  var google = false;

  if (email || facebook || google){
    console.log("login success")
  }

  var auth=false;

  if (auth){console.log("signout button")
  }else{
console.log("log in ")
}

 var authenticated= true;

authenticated ? console.log("singOut Button") : console.log("logIn");


//switch for role based access

var user = "user";
switch(user){
    case "admin":
        console.log("you have full access");
      break;

       case "subadmin":
     console.log("gets scces to create/delete courses");
    
    case "testprep":
        console.log("get acces to create tests");
    
        case "user":
            console.log("trial user");

            defafult:
            console.log("trial user");


}