let btn = document.getElementById('btn');
let outputCharacters = document.getElementById('outputCharacters');
let outputWords = document.getElementById('outputWords');

btn.addEventListener('click', function () {
	let str = document.getElementById('character').value;
	outputCharacters.innerHTML = str.length;
});

btn.addEventListener('click', function () {
	let str = document.getElementById('character').value;
	console.log('str', str);
	let str2 = str.trim();
	console.log({ str2 });
	let str3 = str2.split(' ');
	console.log(str3);
	outputWords.innerHTML = str3.length;
});

const countChars = (str) => {
	str = str.trim();
	str = str.replaceAll(/\n|\r/g, '');
	return str.length;
};

const countWords = (str) => {
	str = str.split(' ')
	str = 
	return str.length;
};

console.log(countChars('Mehmet Yatki'), 12);
console.log(countChars('  Deneme Mesajidir   '), 16);
console.log(
	countChars(`
deneme

mesaji
`),
	12
);

console.log('============');

console.log(countWords('Mehmet Yatki'), 2);
console.log(countWords('  Deneme demo    Mesajidir   '), 3);
console.log(
	countWords(`
deneme

mesaji
`),
	2
);
