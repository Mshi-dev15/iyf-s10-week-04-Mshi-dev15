function removeDuplicate(arr) {
    return [...new set(arr)];
}

console.log(removeDuplicate([1, 2, 2, 4, 4, 5]));



function removeDuplicate(arr) {
    return arr.filter((value, index)=> {
        return arr.indexOf(value) === index;
    });
}