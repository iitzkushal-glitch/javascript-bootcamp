

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
console.log(getUserRole("kushal","admin"));
//different ways of using this shit named function
var getRole = getUserRole("thapa","user");
console.log(getRole);
