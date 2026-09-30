console.log("Script initiated");


let ages = [12, 18, 19, 4, 33, 17, 18]; // ages
let numberOfAdults = 0;
for (let i = 0; i < ages.length; i++) {
    const currentAge = ages[i];

    const isAdult = currentAge > 17
    if (isAdult) {
        numberOfAdults++;
    }
}
console.log("Adults?? -> " + numberOfAdults);


ages = [12, 18, 19, 4, 33, 17, 18, 32, 33, 99, 1090, 1];
ages.forEach((currentAge, index) => {
    if(index === 0) {
        console.log(`First element: ${currentAge} ${index}`)
    }
    if(index === ages.length - 1) {
        console.log(`Last element: ${currentAge} ${index}`)

    }
    console.log(`${currentAge} ${index}`)

});









