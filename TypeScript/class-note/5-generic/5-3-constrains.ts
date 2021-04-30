interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`Full time!!!`);
  }

  workFullTime() {}
}
class PartTimeEmployee implements Employee {
  pay() {
    console.log(`Part time!!!`);
  }

  workPartTime() {}
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const ming = new FullTimeEmployee();
const angdoong = new PartTimeEmployee();

const mingAfter = pay(ming);
const angdoongAfter = pay(angdoong);
