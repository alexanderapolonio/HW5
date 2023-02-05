date = new Date();
year = date.getFullYear();
month = date.toLocaleString('default', {month: 'long'});
day = date.getDate();
document.getElementById("currentDate").innerHTML = month + " " + day + ", " + year;

let quesResults = [];
function submitAnswers() {
  let ages = document.querySelector('input[name="age"]:checked');
  let models = document.querySelector('input[name="model"]:checked');
  let versions = document.querySelector('input[name="ver"]:checked');
  let sizes = document.querySelector('input[name="size"]:checked');
  let result = `Age Group: ${ages.value} | Current Model: ${models.value} | Current Version: ${versions.value} | Current Storage Size: ${sizes.value}`;
  quesResults.push(result);
  console.log(quesResults);
  document.getElementById("timeToUpdate").innerHTML = `It's time to update your ${models.value}${versions.value}! `;
  alert('Thank you for your cooperation, please click on "Results" to answer follow up question to win a new Iphone!');
}
let resResults = [];
function submitInfo() {
  let ages = document.querySelector('input[name="age"]:checked');
  let models = document.querySelector('input[name="model"]:checked');
  let versions = document.querySelector('input[name="ver"]:checked');
  let sizes = document.querySelector('input[name="size"]:checked');
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  let rResult = `${fname} ${lname} from age group ${ages.value} owns a ${models.value} ${versions.value} with ${sizes.value}. Here's the e-mail address for ${fname} ${lname}: ${email}`
  document.getElementById("surveyResults").innerHTML = rResult
  resResults.push(rResult);
    alert(`Thank you for your cooperation! ${fname} ${lname}, a comfirmation email has been sent to ${email}, please check your mail box for further notice!`)
}
