class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Student extends User {
  constructor(firstName, lastName, specialty, group) {
    super(firstName, lastName);
    this.specialty = specialty;
    this.group = group;
    this.ocinka = new Array();
  }

  sayInfo() {
    console.log("firstName: " + this.firstName);
    console.log("lastName: " + this.lastName);
    console.log("specialty: " + this.specialty);
    console.log("group: " + this.group);
    console.log();
  }

  addOcinka(points) {
    this.ocinka.push(points);
  }

  removeOcinka(index) {
    this.ocinka.splice(index, 1);
  }

  changeOcinka(index, value) {
    this.ocinka[index] = value;
  }
}

class Success extends Student {
  constructor(Student) {
    super(
      Student.firstName,
      Student.lastName,
      Student.specialty,
      Student.group
    );
    super.ocinka = Student.ocinka;
  }

  sayInfo() {
    super.sayInfo();
    console.log("Оцінки");
    for (let i = 0; i < this.ocinka.length; i++) {
      console.log(this.ocinka[i]);
    }
    console.log();
  }

  calcAverageScore() {
    var aver = 0;
    for (let i = 0; i < this.ocinka.length; i++) {
     aver += this.ocinka[i];
    }
    aver /= this.ocinka.length;
     console.log("Average score: " + aver);
  }
}

let student = new Student("Nikola", "Tesla", "programer", "TR-12");
let success = new Success(student);

student.addOcinka(5);
student.addOcinka(6);
student.addOcinka(7);
student.addOcinka(8);

success.sayInfo();
success.calcAverageScore();
