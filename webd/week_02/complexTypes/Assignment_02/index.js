
function showEven(arr) {
    arr = arr.filter((num) => {return (num%2)==0;});
    return arr;
}

let arr = [2, 1, 4, 5, 123, 5, 4];

let result = showEven(arr);
console.log(result);
