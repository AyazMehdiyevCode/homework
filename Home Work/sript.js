'use strict';


var enterIdValue = document.getElementById('idInput').value;
var ulList = document.getElementById('ulIdSelect');
var persons = [];


function Person(name, surname, email, birthday, personId) {
  this.personId = personId;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.age = 0;
  this.birthday = birthday;
  this.calculateAge = function () {
    this.age = new Date().getFullYear() - new Date(this.birthday).getFullYear()
  }
};

function getValue(){
var nameValue = document.getElementById('nameInput').value;
var surNameValue = document.getElementById('surnameInput').value;
var birthdayValue = document.getElementById('birthdayInput').value;
var emailValue = document.getElementById('emailInput').value;
for(let i=0; i<=persons.length;i++){
  var personIDs = i+100
}
  let newperson = new Person(nameValue, surNameValue, emailValue, birthdayValue, personIDs);
  
  persons.push(newperson);
  newperson.calculateAge();
  addInnerHtml();
};


function addInnerHtml() {
  var newList="";
  for (let i = 0 ; i<persons.length;i++){
    newList +=  "<li class='list-group-item '>" + persons[i].personId + " " + persons[i].name + " " + persons[i].surname + " " + persons[i].age + " " + persons[i].email + "</li>";
  }
  ulList.innerHTML=newList
};
