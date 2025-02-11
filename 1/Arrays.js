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

class Animal {
    constructor(name, legcnt, speaks) {
        this.name = name;
        this.legcnt = legcnt;
        this.speaks = speaks;
    }
    speak() {
        console.log(this.name + " says " + this.speaks);
    }
}
let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("cat", 4, "meow");
dog.speak();
cat.speak();