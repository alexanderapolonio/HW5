date = new Date();
year = date.getFullYear();
month = date.toLocaleString('default', {month: 'long'});
day = date.getDate();
document.getElementById("currentDate").innerHTML = month + " " + day + ", " + year;

