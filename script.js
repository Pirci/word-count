let btn = document.getElementById('btn');
let outputCharacters = document.getElementById('outputCharacters');
let outputWords = document.getElementById('outputWords');

btn.addEventListener('click', function () {
	let str = document.getElementById('character').value;
	outputCharacters.innerHTML = str.length;
});

btn.addEventListener('click', function () {
	let str = document.getElementById('character').value;
	let str2 = str.trim();
	let str3 = str2.split(' ');
	outputWords.innerHTML = str3.length;
});
