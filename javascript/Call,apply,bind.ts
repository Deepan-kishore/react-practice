const a = {
  name: "Deepanki",
  age: 27,
  writeName: function (a, b) {
    console.log(this.name);
    console.log(a, b);
  },
};

a.writeName.call(
  {
    name: "Kishore",
  },
  1,
  2
);

a.writeName.apply(
  {
    name: "Kishore",
  },
  [1, 2]
);

const binded = a.writeName.bind(
  {
    name: "Binded Kishore",
  },
  1,
  2
);

binded();

// SIMPLE CURRYING EXAMPLE
// Normal function that takes 3 arguments
function add(a: number, b: number, c: number): number {
  return a + b + c;
}

// Curried version - transforms it to take one argument at a time
function curryAdd(a: number) {
  return function(b: number) {
    return function(c: number) {
      return a + b + c;
    };
  };
}

// Usage:
// Normal way: add(1, 2, 3) → 6
// Curried way: curryAdd(1)(2)(3) → 6

console.log("Normal add:", add(1, 2, 3));           // 6
console.log("Curried add:", curryAdd(1)(2)(3));     // 6

// You can partially apply arguments
const add5 = curryAdd(5);        // Partially applied: a = 5
const add5And3 = add5(3);        // Partially applied: a = 5, b = 3
console.log("Partial application:", add5And3(2));   // 10 (5 + 3 + 2)