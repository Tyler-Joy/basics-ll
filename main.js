// (Array) -> Array
// Returns an array whose members are the last three members of the
// input array. If the array has less than 3 members returns the array.
function lastThree(arr) {
    return arr.slice(-3)
}

// (Array[Number]) -> Number
// Returns the sum of all members of the array.
function sum(arr) {
    let total = 0

    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }

    return total
}

// (Array[Number], Array[Number]) -> Number
// Returns the sum of the longer Array.
// If both Arrays are the same length, returns the sum of both Arrays.
// HINT: Use the sum function you wrote above.
function sumOfLonger(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return sum(arr1)
    } else if (arr2.length > arr1.length) {
        return sum(arr2)
    } else {
        return sum(arr1) + sum(arr2)
    }
}

// (Array, Array) -> Bool
// Returns true if the two arrays are identical (contain the same elements
// in the same order).
function arrayEquals(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }

    return true
}

// (Array[Number]) -> Array[Number]
// Returns the difference between each cost and the minimum cost.
//
// For example, if our options were [1, 3, 3, 2, 5].
// The minimum cost would be 1, and the differences from that
// minimum would be [0, 2, 2, 1, 4]
function differenceFromMinimum(costs) {
    let minimum = Math.min(...costs)
    let differences = []

    for (let i = 0; i < costs.length; i++) {
        differences.push(costs[i] - minimum)
    }

    return differences
}

// (String) -> Array[String]
// Returns the hashtags used in the provided tweet.
function hashtags(tweet) {
    let found = tweet.match(/#[a-zA-Z0-9_]+/g)

    if (found === null) {
        return []
    }

    return found
}

// (String) -> Array[String]
// Returns the mentions used in the provided tweet.
// HINT: Can you make a utility function that works for both hashtags
// and mentions?
function mentions(tweet) {
    let found = tweet.match(/@[a-zA-Z0-9_]+/g)

    if (found === null) {
        return []
    }

    return found
}

// (String) -> Array[String, Float, Float]
// Return an inventory item encoded in the provided string.
// An Item is a array of 3 elements:
//     - name
//     - price we paid
//     - price we're charging
// The provided string seperates each of these pieces with a tab.
function parseInventoryString(invStr) {
    let parts = invStr.split("\t")

    return [parts[0], parseFloat(parts[1]), parseFloat(parts[2])]
}