// Code here for your Lambda Classes

class Person {
  constructor(props){
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  speak(){
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
  }
}

class Instructor extends Person {
  constructor(props){
    super(props)
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}.`)
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`)
  }
}

class Student extends Person {
  constructor(props) {
    super(props)
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
  }
  // not sure if this will work
  listsSubjects() {
    for(let i = 0; i < this.favSubjects.length; i++){
      console.log(`${this.name} loves ${this.favSubjects[i]}`)
    }
  }

  
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`)
  }

  sprintChallenge(subject){
    console.log(`${this.name} has begun sprint challenge on ${subject}`)
  }
}

class ProjectManager extends Instructor {
  constructor(props){
    super(props)
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`)
  }
  debugsCode(student, subject){
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
  }
}

// student objects;
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const bill = new ProjectManager({
  name: 'Bill',
  location: 'Michigan',
  age: 32,
  gender: 'female',
  gradClassName: 'CS1',
  favInstructor: 'Luis',
  favLanguage: 'JavaScript',
  specialty: 'Auth',
  catchPhrase: 'Redux Rocks!'
});

const figg = new Student({
  name: 'Figgy',
  location: 'Charleston',
  age: 37,
  gender: 'male',
  previousBackground: 'Fork Lift Operator',
  className: 'CS11',
  favSubjects: ['Html', 'CSS', 'JavaScript']
});


// tests
fred.speak();
fred.demo('variables');
fred.grade(figg, 'redux');

figg.speak();
figg.listsSubjects();
figg.PRAssignment('Redux');
figg.sprintChallenge('Pre-proccessing');

bill.speak();
bill.demo('Redux');
bill.grade(figg, 'const vs let');
bill.debugsCode(figg, 'DS-Algos');
bill.standUp('#Code-Allstars');
