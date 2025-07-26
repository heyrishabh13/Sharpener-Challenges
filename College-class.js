class College {
  static collegeName;

  constructor(cgpa = 0.0) {
    this.cgpa = cgpa;
  }

  studentDetails() {
    console.log(this.collegeName);
    console.log(this.cgpa);
  }
}

College.collegeName = "SMVDU";
let rishabh = new College(5.6);
rishabh.collegeName = "VIT";
rishabh.studentDetails();

let pranjal = new College(6.4);
pranjal.studentDetails();
