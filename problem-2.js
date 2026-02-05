// 🔹 Problem 2: Array Sum

// একটা array দেওয়া আছে। সব সংখ্যার sum বের করো।

// [2, 4, 6, 8]


// Output: 20

 
function arraySum(number) {
    let sum = 0;

    for(const num of number) {
        sum = sum + num;
    }
    return sum;
}

let numbers = [2, 4, 6, 8];
console.log(arraySum(numbers));