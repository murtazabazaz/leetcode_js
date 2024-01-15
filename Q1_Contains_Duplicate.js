const prompt = require('prompt-sync')();


function hasDuplicates(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                // Found a duplicate
                return true;
            }
        }
    }
    // No duplicates found
    return false;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 1];

const input = prompt("Enter numbers separated by commas: ");
const user = input.split(',').map(Number);

console.log(hasDuplicates(user));
console.log(hasDuplicates(array1));
console.log(hasDuplicates(array2));
