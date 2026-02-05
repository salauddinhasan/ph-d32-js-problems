// 🔹 Problem 3: Largest Number

// একটা array থেকে সবচেয়ে বড় সংখ্যা বের করো।

// [10, 45, 23, 89, 5]


// Output: 89



function findLargestNumber(numbers) {

    let largest = [0];

    for(const num of numbers) {
        if(num >largest ) {
            largest = num;
        }
    }
    return largest;
}

let numbers = [10, 45, 23, 89, 5];
console.log(findLargestNumber(numbers));