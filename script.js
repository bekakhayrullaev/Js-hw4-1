let arrThree = ['Aleksey', 'Kartoshka', 'Margarin', 'Morgenshtern', 'Monica'] 

let length = arrThree.length;

let index = prompt();

arrThree.splice(index, 1)

if (length == arrThree.length){
    console.log('Такого элемента нет')
} else if (arrThree.splice) {
    console.log(arrThree)
}