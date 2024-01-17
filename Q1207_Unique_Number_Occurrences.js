var uniqueOccurrences = function(arr) {
    let countMap = new Map();

    // Count occurrences of each element in the array
    for (let num of arr) {
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num) + 1);
        } else {
            countMap.set(num, 1);
        }
    }

    let occurrenceSet = new Set();

    // Check if the counts are unique
    for (let count of countMap.values()) {
        if (occurrenceSet.has(count)) {
            return false;
        }
        occurrenceSet.add(count);
    }

    return true;
};

// Example usage with array [3, 5, -2, -3, -6, -6]
console.log(uniqueOccurrences([3, 5, -2, -3, -6, -6])); // This should return false
