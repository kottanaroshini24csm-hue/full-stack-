// ========================================
// 1. SINGLE INHERITANCE
// ========================================

class Animal {
    eat() {
        console.log("Animal eats");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog barks");
    }
}

console.log("1. Single Inheritance:");
let dog = new Dog();
dog.eat();
dog.bark();


// ========================================
// 2. MULTILEVEL INHERITANCE
// ========================================

class Animal2 {
    eat() {
        console.log("Animal eats");
    }
}

class Dog2 extends Animal2 {
    bark() {
        console.log("Dog barks");
    }
}

class Puppy extends Dog2 {
    play() {
        console.log("Puppy plays");
    }
}

console.log("\n2. Multilevel Inheritance:");
let puppy = new Puppy();
puppy.eat();
puppy.bark();
puppy.play();


// ========================================
// 3. HIERARCHICAL INHERITANCE
// ========================================

class Animal3 {
    eat() {
        console.log("Animal eats");
    }
}

class Dog3 extends Animal3 {
    bark() {
        console.log("Dog barks");
    }
}

class Cat3 extends Animal3 {
    meow() {
        console.log("Cat meows");
    }
}

console.log("\n3. Hierarchical Inheritance:");

let dog3 = new Dog3();
dog3.eat();
dog3.bark();

let cat3 = new Cat3();
cat3.eat();
cat3.meow();


// ========================================
// 4. MULTIPLE INHERITANCE
// Using Mixins
// ========================================

class Father {
    fatherProperty() {
        console.log("Property from Father");
    }
}

class Mother {
    motherProperty() {
        console.log("Property from Mother");
    }
}

// Mixin functions
const FatherMixin = Base => class extends Base {
    fatherProperty() {
        console.log("Property from Father");
    }
};

const MotherMixin = Base => class extends Base {
    motherProperty() {
        console.log("Property from Mother");
    }
};

class Child extends MotherMixin(FatherMixin(Object)) {
    childProperty() {
        console.log("Property from Child");
    }
}

console.log("\n4. Multiple Inheritance:");

let child = new Child();
child.fatherProperty();
child.motherProperty();
child.childProperty();


// ========================================
// 5. HYBRID INHERITANCE
// Combination of inheritance types
// ========================================

class LivingThing {
    live() {
        console.log("Living thing lives");
    }
}

class Human extends LivingThing {
    walk() {
        console.log("Human walks");
    }
}

const StudentMixin = Base => class extends Base {
    study() {
        console.log("Student studies");
    }
};

const WorkerMixin = Base => class extends Base {
    work() {
        console.log("Worker works");
    }
};

class Student extends StudentMixin(Human) {
    write() {
        console.log("Student writes");
    }
}

class Employee extends WorkerMixin(Human) {
    workAtOffice() {
        console.log("Employee works at office");
    }
}

console.log("\n5. Hybrid Inheritance:");

let student = new Student();
student.live();
student.walk();
student.study();
student.write();

let employee = new Employee();
employee.live();
employee.walk();
employee.work();
employee.workAtOffice();
