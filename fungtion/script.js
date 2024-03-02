// Print odd numbers in an array
(function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Convert all the strings to title caps in a string array
(function(arr) {
    var titleCaps = arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
    console.log(titleCaps);
})(["hello", "world", "javascript"]);

// Sum of all numbers in an array
(function(arr) {
    var sum = arr.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);
    console.log(sum);
})([1, 2, 3, 4, 5]);

// Return all the prime numbers in an array
(function(arr) {
    function isPrime(num) {
        if (num <= 1) return false;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    var primes = arr.filter(function(num) {
        return isPrime(num);
    });
    console.log(primes);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Return all the palindromes in an array
(function(arr) {
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }
    var palindromes = arr.filter(function(str) {
        return isPalindrome(str);
    });
    console.log(palindromes);
})(["racecar", "level", "hello", "world", "madam"]);

// Return median of two sorted arrays of the same size
(function(arr1, arr2) {
    var mergedArr = arr1.concat(arr2);
    var sortedArr = mergedArr.sort(function(a, b) {
        return a - b;
    });
    var length = sortedArr.length;
    var median = length % 2 === 0 ? (sortedArr[length / 2 - 1] + sortedArr[length / 2]) / 2 : sortedArr[Math.floor(length / 2)];
    console.log(median);
})([1, 3, 5], [2, 4, 6]);

// Remove duplicates from an array
(function(arr) {
    var uniqueArr = arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
    console.log(uniqueArr);
})([1, 2, 3, 3, 4, 4, 5, 5]);

// Rotate an array by k times
(function(arr, k) {
    var rotatedArr = arr.slice(k).concat(arr.slice(0, k));
    console.log(rotatedArr);
})([1, 2, 3, 4, 5], 2);
