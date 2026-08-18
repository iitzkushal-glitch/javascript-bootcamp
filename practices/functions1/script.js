

function sayHello(name)   {
console.log("lol ")  
console.log(`hello whats up, ${name}. How are you`)  ;
}

sayHello("kushal");
sayHello("ppp");

function namaste(){
    return"hello in nepali"
}
var greetings = namaste();
console.log(greetings);
console.log(namaste());

 var  getUserRole = function (name,role){
    switch (role){
        case "admin":
        return`${name} is admin with all access` ;   
            break;//this is not necessary cause it has no role forr this
        case "subadmin":
            return`${name} is sub-admin with  access to create and delete cources` ;   
            break;
        case "testprepe":
            return `${name} is a test prep with access to create and delete tests`;
         break;
         case "user":
        return `${name} is a user to consume content`;
        break;

        case"trial user":
        return`${name} is a trial user`;
        default:
            break;
    }
}
//different ways of using this shit named function
console.log(getUserRole("kushal","admin"));

var getRole = getUserRole("thapa","user");
console.log(getRole);


// this is classic way to use functions
function giveUserName(name1, role1){
switch(role1){
      case "admin":
       return `${name1} is admin and he can do whatever he wants!`;

       case "co-admin":
       return`${name1} is co-admin he can do a lot but not ad abmin just a tiny admin`;

       case "worker":
        return`${name1} is a worker who work under admin and co-admin`;

        case "user":
    return `${name1} is user of this application who is logined`;
    
            case "trial user":
            return`${name1} is a user who is ha not sign up `;
}
}

var name44 = giveUserName("kushal","admin");
console.log(name44);

console.log(giveUserName("kushal","trial user"));
