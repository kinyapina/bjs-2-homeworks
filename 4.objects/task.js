function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('excluded')) {
    return 0;
  }

  if (marks !== undefined || this.marks.length !== 0) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if (!this.hasOwnProperty('marks') || !this.marks || this.marks.length === 0) {
    return 0;
  }

  let average = 0;

  return average = this.marks.reduce((sum, item) => sum + item, 0) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}