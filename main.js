date = new Date();
year = date.getFullYear();
month = date.toLocaleString('default', {month: 'long'});
day = date.getDate();
document.getElementById("currentDate").innerHTML = month + " " + day + ", " + year;

let quesResults = [];
function submitAnswers() {
  let ages = $('input[name="age"]:checked');
  let models = $('input[name="model"]:checked');
  let versions = $('input[name="ver"]:checked');
  let sizes = $('input[name="size"]:checked');
  let result = `Age Group: ${ages.val()} | Current Model: ${models.val()} | Current Version: ${versions.val()} | Current Storage Size: ${sizes.val()}`;
  quesResults.push(result);
  console.log(quesResults);
  $('#timeToUpdate').html(`It's time to update your ${models.val()} ${versions.val()}! `);
  alert('Thank you for your cooperation, please click on "Results" to answer follow up question to win a new Iphone!');
}

let resResults = [];
function submitInfo() {
  let ages = $('input[name="age"]:checked');
  let models = $('input[name="model"]:checked');
  let versions = $('input[name="ver"]:checked');
  let sizes = $('input[name="size"]:checked');
  const fname = $("#fname").val();
  const lname = $("#lname").val();
  const email = $("#email").val();
  let rResult = `${fname} ${lname} from age group ${ages.val()} owns an ${models.val()} ${versions.val()} with size of ${sizes.val()}. Here's the e-mail address for ${fname} ${lname}: ${email}`
  $("#surveyResults").html(rResult);
  resResults.push(rResult);
  alert(`Thank you for your cooperation! ${fname} ${lname}, a confirmation email has been sent to ${email}, please check your mail box for further notice!`)
}
