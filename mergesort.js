function mergeSort(array) {
    if(array.length <=1){
        return array;
    }
    const leftSide = array.splice(0, array.length / 2);
    
    return merge(mergeSort(leftSide), mergeSort(array));
}


function merge(left, right) {
    let arr = [];

    while (left.length && right.length) {
        if( left[0] < right[0] ? arr.push(left.shift()) : arr.push(right.shift()) );
    }

    return [...arr, ...left, ...right];
}


console.log(mergeSort([3, 6, 13, 5, 230, 10]))