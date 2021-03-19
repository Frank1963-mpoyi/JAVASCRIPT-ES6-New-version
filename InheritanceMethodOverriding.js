class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} make noise `);
    }
}

class Dog extends Animal {
    constructor(name){ //here dog class will access speak method in 
        super(name);
    }

    //here is method overriding
    speak(){
        console.log(`${this.name} barking `);
    }
}

dog = new Dog("dog");
//console.log(dog.speak());
animal = dog.speak();
console.log(animal)