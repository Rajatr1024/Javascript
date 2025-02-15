// const inttialarray =[1,2,3];
// function logThing(str)
// {
//     console.log(str);
// }
// inttialarray.forEach(logThing)
// // Updating

// const dog = {
//     name: "Dogg",
//     leg: 4,
//     speaks: "bark"
// }

// const cat = {
//     name: "caty",
//     leg: 4,
//     speaks: "meow"
// }
// console.log("animal " + dog["name"] +" " + dog["speaks"]);
// console.log("animal " + cat["name"] +" " + cat["speaks"]);


// // New file

// class Animal {
//     constructor(name, legcnt, speaks) {
//         this.name = name;
//         this.legcnt = legcnt;
//         this.speaks = speaks;
//     }
//     speak() {
//         console.log(this.name + " says " + this.speaks);
//     }
// }
// let dog = new Animal("dog", 4, "bhow bhow");
// let cat = new Animal("cat", 4, "meow");
// dog.speak();
// cat.speak();


// // New file

// const currentdate=new Date();
// console.log(currentdate.getDate());
// console.log(currentdate.getYear());
function dateMethods() {
    const currentDate = new Date();
    console.log("Current Date:", currentDate);
  
    // Getting various components of the date
    console.log("Date:", currentDate.getDate());
    console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
    console.log("Year:", currentDate.getFullYear());
    console.log("Hours:", currentDate.getHours());
    console.log("Minutes:", currentDate.getMinutes());
    console.log("Seconds:", currentDate.getSeconds());
  
    // Setting components of the date
    currentDate.setFullYear(2022);
    console.log("After setFullYear:", currentDate);
  
    currentDate.setMonth(5); // Setting month to June (zero-indexed)
    console.log("After setMonth:", currentDate);
  
    // Getting and setting time in milliseconds since 1970
    console.log("Time in milliseconds since 1970:", currentDate.getTime());
  
    const newDate = new Date(2023, 8, 15); // Creating a new date
    console.log("New Date:", newDate);
  }
  
  // Example Usage for Date Methods
  dateMethods();
//   Update 1