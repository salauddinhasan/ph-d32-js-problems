// 🔹 Problem 1: Even or Odd

// একটা function বানাও যেটা একটা number নিবে

// যদি even হয় → "Even"

// যদি odd হয় → "Odd"
// return করবে।

// Input: 7
// Output: "Odd"



function checkNumber(number) {
    if(number % 2 === 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}

console.log(checkNumber(7));