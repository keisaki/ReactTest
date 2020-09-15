const person = {
	name: {
	first: 'Peter',
	last: 'Smith'
	},
	
	age: 30,
	role : 'tester',
}

const {name:{first: firstName,last: lastName},age} = person;
console.log(firstName,lastName,age);

const {role = 'user ',access = 'all'} = person;
console.log(role,access);

const {permissions : {liveTime = '0'} = {}}= person;

console.log(liveTime);


//деструктуризация в параметрах
function connect({host= 'localhost', port = 1234, user = 'guest'}={})
{
	console.log('user:',user,'port:',port,'host:',host);
}
connect();
connect({});
connect({port:'1234'});

//rest element

const dict = {
	duck: 'quack',
	dog: 'wouf',
	mouse: 'squeak'
}
const {duck,...otherAnimals} = dict;

console.log(duck,otherAnimals);
