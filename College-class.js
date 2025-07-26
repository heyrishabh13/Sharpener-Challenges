class College {
  static collegeName;
  cgpa;

  constructor(cgpa = 0.0) {
    this.cgpa = cgpa;
  }

  static studentDetails() {
    console.log(collegeName);
    console.log(cgpa);
  }
}

College.collegeName = "SMVDU";
let rishabh = new College(5.6);
