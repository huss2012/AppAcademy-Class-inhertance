const { expect } = require('chai');
const Person = require('./person');

// Your code here
class Teacher extends Person{
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName, subject, yearsOfExperience)
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    return teachers.reduce((crru, iv) => {
      return crru += iv.yearsOfExperience;
    }, 0)
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
