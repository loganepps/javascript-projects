// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.

class Astronaut {
  constructor(name, age = 120, mass) {
    this.name = name;
    this.age = age;
    this.mass = mass;
  }
}

let tortoise = new Astronaut("Speedy");

console.log(tortoise.name, tortoise.age, tortoise.mass);

// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!

let kitty = new Astronaut("Saturn", 1, 8, true, "Squack");

console.log(kitty.name, kitty.age, kitty.mass, kitty.isStinky, kitty.nickName);
console.log(kitty);
