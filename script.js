

function start() {
  document.getElementById('start__button').hidden = true;
  document.getElementById('registr').hidden = false;

}

var firstName = document.getElementById('area2').value;
var lastName = document.getElementById('area1').value;
var group = document.getElementById('area3').value;

function valid() {
  firstName = document.getElementById('area2').value;
  lastName = document.getElementById('area1').value;
  group = document.getElementById('area3').value;
  if (firstName != '' && lastName != '' && group != '') {
    startTest()
  }
  console.log(firstName)
  console.log(lastName)
  console.log(group)
}

var res = []

function startTest() {
  document.getElementById('registr').hidden = true;
  document.getElementById('test').hidden = false;
  document.getElementById('test').classList.add('addFlex');
  document.getElementById('test__zv1').hidden = false;

}


function checkAnswer(i) {
  var res = 0;
  switch (i) {
    case 1:
      if (document.getElementById("pick12").checked) {
        res = 1;
      }
      break;
    case 2:
      if (document.getElementById("pick24").checked && document.getElementById("pick25").checked) {
        res = 1;
      }
      break;
    case 3:
      if (document.getElementById("select1").value == 'pick33') {
        res += 0.5;
      }
      if (document.getElementById("select2").value == 'pick35') {
        res += 0.5;
      }
      break;
    case 4:
      if (document.getElementById("pick41").checked) {
        res = 1;
      }
      break;
    case 5:
      if (document.getElementById("bgcolor").value == "#723cd7") {
        res = 1;
      }

      break;
    case 6:
      res = 1;

      break;
    case 7:
      if (document.getElementById("pick73").checked) {
        res = 1;
      }
      break;
    case 8:
      if (document.getElementById("pick82").checked) {
        res = 1;
      }
      break;
    case 9:
      if (document.getElementById("pick91").checked) {
        res += 0.5;
      }
      if (document.getElementById("pick94").checked) {
        res += 0.5;
      }
      break;
    case 10:
      if (document.getElementById("pick101").checked) {
        res = 1;
      }
      break;
  }

  return res;
}



var ocinka = 0;

var answerQuestion = 1;

function nextQuestion() {

  if (answerQuestion === 10) {
    document.getElementById('test__zv10').hidden = true;
    document.getElementById('next__button').hidden = true;
    document.getElementById('resultTest').hidden = false;
  } else {
    document.getElementById('test__zv' + (answerQuestion + 1)).hidden = false;
    document.getElementById('test__zv' + answerQuestion).hidden = true;
  }

  ocinka += checkAnswer(answerQuestion);
  console.log(ocinka)
  answerQuestion++;
  if (answerQuestion === 11) {
    document.getElementById('resultTest').classList.add('addFlex');
    document.getElementById('resLastName').textContent += lastName;
    document.getElementById('resFirstName').textContent += firstName;
    document.getElementById('resGroup').textContent += group;
    document.getElementById('resRating').textContent += ocinka;
  }

}

let myBtn = document.querySelector('#next__button');
let select1 = document.querySelector('#select1')
let select2 = document.querySelector('#select2')
let hr1 = document.querySelector('#hr1')
let hr2 = document.querySelector('#hr2')
let hr3 = document.querySelector('#hr3')
var colorPicker = document.getElementById("bgcolor");

function changebodycolor() {
  var colorVal = colorPicker.value;
  document.body.style.color = colorVal;
  myBtn.style.background = colorVal;
  select1.style.background = colorVal;
  select2.style.background = colorVal;
  hr1.style.color = colorVal;
  hr2.style.background = colorVal;
  hr3.style.background = colorVal;
}

colorPicker.addEventListener("change", changebodycolor, false);


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}