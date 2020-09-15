const user = 'Bob';
const num = 17;
const txt = 'Hello, '+user+' you have ' + num + ' letters in inbox';
const txt2 = `Hello, ${user} you have ${num} letters in inbox ${Date.now()}`;

console.log(txt);
console.log(txt2);


const items = ['tea','coffee'];
const templateHtml = `
<ul>
	<li>${items[0]}</li>
	<li>${items[1]}</li>
</ul>
`
console.log(templateHtml);