//console.log("hello");


function checkNumbers() {
    for (let i = 10; i <= 20; i++) {

        if (i % 2 === 0) {
            console.log(i);
        }

    }
}

checkNumbers();

// using while
function checkNumbers() {
    let i = 11;

    while (i <= 20) {
        if (i % 2 === 0) {
            console.log(i);
        }

        i++;
    }
}

checkNumbers(); 