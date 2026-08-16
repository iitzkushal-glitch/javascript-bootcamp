

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

function getUserRole(name,role){
    switch (role){
        case "admin":
        return`${name}is admin with all access`    
            break;
        case "subadmin":
            return`${name} is sub-admin with  access to create and delete cources`    
            break;

    


        default:
            break;
    }
}
sayHello