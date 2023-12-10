class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}
export {};

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(door: boolean, key: Key) {
    this.door = door;
    this.key = key;
  }
  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person.getKey().getSignature()} entered the house.`);
    } else {
      console.log("The door is closed.");
    }
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(true, key);
  }
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      console.log("Opening the door.");
    } else {
      console.log("Wrong key. Door remains closed.");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
