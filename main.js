"use strict";
// Define a function that accepts a size and the text of a message that should be a printed on the shirt.
const make_shirt = (size, message) => {
    console.log(`size: ${size}, Message: '${message}'`);
};
// Call the function
let size = "medium";
let messege = "Love With Eeshah";
make_shirt(size, messege);
make_shirt("Large", "I Love Pakistan");
make_shirt(size, messege);
make_shirt("Extra Large", "Proud to be a Pakistani");
