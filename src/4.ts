// Клас Key
class Key {
    private signature: number;
  
    constructor() {
      this.signature = Math.random(); // Унікальний "підпис"
    }
  
    public getSignature(): number {
      return this.signature;
    }
  }
  
  // Клас Person
  class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key;
    }
  
    public getKey(): Key {
      return this.key;
    }
  }
  
  // Абстрактний клас House
  abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = [];
  
    constructor(key: Key) {
      this.key = key;
    }
  
    public comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
        console.log("Person has entered the house.");
      } else {
        console.log("The door is closed. Person cannot enter.");
      }
    }
  
    public abstract openDoor(key: Key): void;
  }
  
  // Клас MyHouse, що успадковується від House
  class MyHouse extends House {
    public openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log("Door is now open.");
      } else {
        console.log("Wrong key. Door remains closed.");
      }
    }
  }
  
  // Сценарій використання
  const key = new Key();
  const house = new MyHouse(key);
  const person = new Person(key);
  
  house.openDoor(person.getKey());
  house.comeIn(person); // => "Person has entered the house."
  
  export {};
  