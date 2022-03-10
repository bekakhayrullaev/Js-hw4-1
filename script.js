
let arr = [1,2,false,'hello',24,'world',undefined,null,'error',22];


let filtered = arr.filter(item => typeof item === 'number')
console.log(filtered);

let str = arr.filter(item => typeof item === 'string')
console.log(str);

let bool = arr.filter(item => typeof item === 'boolean')
console.log(bool);

let obj = arr.filter(item => typeof item === 'object')

console.log(obj);

let find = arr.filter(item => typeof item === 'underfined')

console.log(find );

