// const square = function (x) {
//     return x*x;
// }

// const square = (x) => {  //Arrow Function
//     return x*x;
// }

// const square = (x) => x*x; //Arrow function with a single statement
// console.log(square(3));

const event = {
    name : "Birthday Party",
    guestList : ['Angel', 'Mike', 'Jen'],
    printGuestList() {  //ES6 function
        //const that = this;
        console.log("Guest List for " + this.name);
        
         /* this.guestList.forEach(function(guest) { // this.name cant bind name property of parent function. It is binded to its own function properties
            console.log(guest + ' is attending ' + this.name);
        }) */

        this.guestList.forEach( (guest) => { // Arrow func is not binded to its own this property. So this.name is binded to its parent property
            console.log(guest + ' is attending ' + this.name);
        })
    }
}
 event.printGuestList();