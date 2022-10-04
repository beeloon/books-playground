// In general, for any list of n, binary search will take log2 n steps to run in the worst case, whereas simple search will take n steps.

const binarySearch = (list, target) => {
    let low = 0
    let high = list.length - 1

    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const guess = list[mid]

        if (guess === target) 
            return mid
        if (guess > target) 
            high = mid - 1
        else 
            low = mid + 1
    }

    return null;
}

const myList = [1, 3, 5, 7, 9]

binarySearch(myList, 3);