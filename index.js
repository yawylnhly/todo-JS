var addItem = document.getElementById('add');
var container = document.getElementById('to-dos');
var input = document.getElementById('inputField');


addItem.addEventListener('click', function() {
	if (inputField.value){
	var paragraph = document.createElement('p')
  paragraph.innerText = inputField.value;
  container.appendChild(paragraph)
  inputField.value = "";
  paragraph.addEventListener('click', function() {
    paragraph.style = " display: none";
})
  
}})