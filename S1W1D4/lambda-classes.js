// Code here for your Lambda Classes

class Person {
  constructor(props){
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
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
    console.log(`${student} recieves a perfect score on ${subject}.`)
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
    console.log(`${this.favSubjects[this.favSubjects.length]}`)
  }

  // This or props for methods?
  PRAssignment(subject) {
    console.log(`${props.name} has submitted a PR for ${subject}`)
  }

  sprintChallenge(subject){
    console.log(`${props.name} has begun sprint challenge on ${subject}`)
  }
}

class ProjectManager extends Instructor {
  constructor(props){
    super(props)
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }
  standUp(channel) {
    console.log(`${props.name} announces to ${channel}, @channel standy times!`)
  }
  debugsCode(student, subject){
    console.log(`${props.name} debugs ${student.name}'s code on ${subject}`)
  }
}