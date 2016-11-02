var student = {
  name: "",
  type: "student"
}
document.addEventListener('DOMcontentLoaded',contentLoaded);
function contentLoaded(event){
  document.getElementById('name').addEventListener("Keyup"keyup)
}
function keyup(event) {
  calculatorNumericOutput();
}
function calculatorNumericOutput(){
  student.name = document.getElementById('name').value;

  var totalNamValue=0;
  for (var i = 0; i < student.name.length; i++) {
    totalNamValue += student.name.charCodeAt(i);
  }
  var output = "Total Numberic value of person's name is " + totalNamValue;
  document.getElementById('output').innerText = output;
}
