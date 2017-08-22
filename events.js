var output = document.getElementById('output-target');


// 1. When any section is clicked the output target text should be "You clicked on the {text of the section} section"
// 
document.body.addEventListener('click', function(event){
	 if (event.target.className === 'article-section'){
		output.innerHTML = `<p>You clicked on the ${event.target.textContent} section</p>`;
	}	
});

// 2. When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
var h1Title = document.getElementById('page-title');
h1Title.addEventListener('mouseover', function(e){
		output.innerHTML = "<p>You moved your mouse over the header</p>";
});

// 3. When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
h1Title.addEventListener('mouseleave', function(e){
	output.innerHTML = '<p>You left me!!</p>'
});

// 4. When you type characters into the input field, the output element should mirror the text in the input field.
var text = document.getElementById('keypress-input');
text.addEventListener("keyup", function(e){
	output.innerHTML = `<p> ${text.value} </p>`;
});

// 5. When you click the "Add color" button, the guinea-pig element's text color should change to blue.
var color = document.getElementById('add-color');
var gP = document.getElementById('guinea-pig');
color.addEventListener('click', function(e){
	gP.classList.toggle('blue');
});

// 6. When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
var hulk = document.getElementById('make-large');
hulk.addEventListener('click', function(e){
	gP.classList.toggle('hulk');
});

// 7. When you click the "Capture it" button, the guinea-pig element should have a border added to it.
var border = document.getElementById('add-border');
border.addEventListener('click', function(e){
	gP.classList.toggle('capture');
})

// 8. When you click the "Rounded" button, the guinea-pig element's border should become rounded.
var round = document.getElementById('add-rounding');
round.addEventListener('click', function(e){
	if (gP.classList.toggle('capture')) {
		gP.classList.toggle('round');
	} else {
		gP.classList.toggle('capture');
		gP.classList.toggle('round');}
})
// 9. The first section's text should be bold.

// // 10. The last section's text should be bold and italicized.

// 11. Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
btnClass();
function btnClass () {
	var btn = document.getElementsByTagName('button');
	for (var i = 0; i < btn.length; i++) {
		btn[i].classList.add('block');
	}
}




