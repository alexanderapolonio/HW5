function add()
{
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    document.getElementById('results').innerHTML = num1 + num2;
}