function binarySearch(arr, item) {
    let low = 0 // first index of array
    let high = list.length - 1 // last index of array

    while (low <= high) {
        // initialize middle item of array
        let mid = Math.floor((low + high) / 2) 

        // and white it to variable
        let guess = list[mid]

        // first look at the middle item, 
        // and if it’s what we’re looking for we return it.
        if (guess === item) {
            return mid
        }

        // If not, we set the low or high values to only look at the left or right part of the array
        // and we repeat the process until we find the item.
        if (guess > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return null // if not found
}