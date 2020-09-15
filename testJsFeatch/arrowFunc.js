function square(x)
{
	return x*x;
}

const sq = (x) => x*x;

console.log(sq(3));

const arr = ['1','2','3','4'];

const res = arr.map((el)=>parseInt(el)).filter((num => num%2)).reduce((max,value)=>Math.max(max,value),0);

console.log(res);

const sqT = (x) => {
	return x*x;
}

const greeter  = { 

	greet: function(name)
	{
		console.log('Hello',name);
	},

	greetAll: function(names)
	{
		names.forEach((name)=>{this.greet(name);});
	}
};

greeter.greetAll(['bob','mark','stan']);