function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    // creating middle point of Array 
    let n1 = Math.floor(arr.length / 2)

    // divide array by Left side and rigth side
    let L = mergeSort(arr.slice(0, n1))
    let R = mergeSort(arr.slice(n1, arr.length))
    
    // main algorithm of sort
    return _mergeArr(L, R)
}

function _mergeArr(a, b) {
    let c = []

    // To make it inverted just change a inequality symbol from '>' to '<'
    while(a.length && b.length) {
        c.push(a[0] < b[0] ? b.shift() : a.shift())
    }

    //if we still have values, let's add them at the end of `c`
    while(a.length) {
        c.push(a.shift())
    }
    while(b.length) {
        c.push(b.shift())
    }

    return c
}



console.log('Inverted merge Sort ' + mergeSort([1,2,3,4,5,6,7,8,9]))