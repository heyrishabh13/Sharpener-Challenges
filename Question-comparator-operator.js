class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

let obj1 = new Employee("Rishabh", 50000);
let obj2 = new Employee("Pradeep", 90000);
let obj3 = new Employee("Rani", 80000);
let obj4 = new Employee("Priyanshi", 150000);
let obj5 = new Employee("Pranjal", 100000);

let array = [obj1, obj2, obj3, obj4, obj5];

array.sort((a, b) => {
  //   console.log(a.salary, b.salary);
  return b.salary - a.salary;
});

// console.log(array, sortedArray);

array.forEach((obj) => {
  console.log(obj.name);
});
