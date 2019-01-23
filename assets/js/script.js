function myFunction() {
var regex = new RegExp (/[1-9]/);
var regex2 = new RegExp (/[0-9]/);
var firstNumber = document.getElementById("firstNumber").value;
var secondNumber = document.getElementById("secondNumber").value;
var result = firstNumber % secondNumber;
if (regex.test(secondNumber)& regex2.test(firstNumber)){

  alert(result);
} else {
  alert ('merci de remplir correctement tous les champs');
}
}
