
// function Display(name, surname){
//     this.name =name;
//     this.surname = surname;
// }

// myname = new Display("Mpoyi", "Tshibuyi")

// myname.name = "Tshiuyi"
// console.log(myname);

class Display {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    greeting(){
        console.log(`Hi I am greeting ${this.name}`)
    }
}

let myname = new Display("Mpoyi", "Tshibuyi");
console.log(myname);
console.log(myname.greeting("Mpoyi"))


// STATIC FUNCTION OR METHOD
// if you are using static you must must not call it with your object name but use the class name to access it 

class Display1 {
    constructor(name){
        this.name = name;
    }

    static greeting(){
        console.log("Hi this is static function ...");
    }
}

let myname1 = new Display1("Mpoyi");
//myname.greeting(); // you can not access  static with object variable we use class
Display1.greeting()
console.log(myname1)

// GETTERS AND SETTERS

class Display2 {
    constructor(name){
        this.name = name;
    }
    set name(name){
        this._name = name
    }

    get name(){
        return this._name;
    }
}

let display23 = new Display2("Frank Mpoyi 33");
console.log(display23.name)

