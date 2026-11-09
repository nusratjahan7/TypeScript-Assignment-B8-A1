# Access Modifiers in TypeScript

## Introduction

Access modifiers decided who can use the properties and methods of a class. They protect your data and keep your code clean. Typescript gives us four: `public`, `private`, `protected`, and `readonly`.

# How They Work
 
- `public`: accessible from anywhere. This is the default.
- `private`: accessible only inside the same class.
- `protected`: accessible inside the class and its child classes.
- `readonly`: can be set only once, at declaration or in the constructor.

```ts
class Person {
  public name: string;
  private age: number;
  protected city: string;
  readonly country: string;

  constructor(name: string, age: number, city: string, country: string) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.country = country;
  }

  public getDetails(): string {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Employee extends Person {
  public showCity(): string {
    return this.city; // Allowed: protected
  }
}

const person = new Employee("Rakib", 25, "Dhaka", "Bangladesh");

console.log(person.name);        // Rakib
console.log(person.getDetails()); // Rakib is 25 years old.
console.log(person.showCity());   // Dhaka
console.log(person.country);     // Bangladesh

// console.log(person.age); // Error: private
// console.log(person.city); // Error: protected
// person.country = "USA"; // Error: readonly

```

these checks happen only at compile time. After compiling to JavaScript, `private` is not enforced. For real privacy at runtime, use `#balance`.


## Conclusion
 
Use `private` to hide internal data, `protected` to share it with child classes, `public` for the outside API, and `readonly` for values that must never change.