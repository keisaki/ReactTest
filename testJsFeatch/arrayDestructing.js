const fib = [1,1,2,3,5,8,13];

const [,,a,b,c,,,d='default'] = fib;

const [firtelem, ...others] = fib;


console.log(firtelem,others);

console.log(a,b,c,d);


const line = [[1,2],[3,4]];

const [[p1x,p1y],[p2x,p2y]] = line;


console.log(p2x,p2y);


const dict = {
	duck: 'quack',
	dog: 'wouf',
	mouse: 'squeak',
	hamster: 'squeak'
}

const res = Object.entries(dict).filter(([key,value])=>value==='squeak').map(([key])=>key);

console.log(res);


const shape = {
	type: 'segment',
	coordinates:{
		start:[10,15],
		end:[20,20]
	}
};

const {coordinates: {start:[startX,startY],end:[endX,endY]}} = shape;
console.log(startX,startY,endX,endY);