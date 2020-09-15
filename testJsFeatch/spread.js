const arr1 = [1,2,3];
const arr2 = [2,3,4];

const res = Math.max(...arr1,5,...arr2);

console.log(res);

const shallowCopy = [...arr1,...arr2,3];

console.log(shallowCopy);