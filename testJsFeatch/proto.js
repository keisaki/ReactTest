const person = Object({
    name: 'Max',
    age: 20,
    greet: function(){
        console.log('Greet');
    }
})

Object.prototype.sayHello = function(){
    console.log('Hello');
}
person.greet();
person.sayHello();

const lena = Object.create(person);

lena.greet();

console.log(lena.name);

lena.name = 'Elena'

console.log(lena.name);

//https://www.youtube.com/watch?v=aQkgUUmUJy4