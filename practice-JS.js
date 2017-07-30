console.log("Hello World!")

// Question #1

// check for lower case letters
function allCaps(str) {
  for(let letter of str) {
    if(letter === letter.toLowerCase()) {
      return false
    }
  }

  return true
}

// scramble the letters
function randomizeLetters(str) {
  return str.split("").map(function(letter) {
    if(Math.floor((Math.random()) * 20) % 2 === 0) {
      return letter.toLowerCase()
    } else {
      return letter.toUpperCase()
    }
  })
  .join("")
}

// iterate over the string, applying word scrambler if necessary
function scramble(str) {
  return str.split(" ").map(function(word) {
    if(allCaps(word)) {
      return word
    } else {
      return randomizeLetters(word)
    }
  })
  .join(" ")
}

// Question #2

// 1) You are given s1 and s1, two arrays of strings. Each string contains only lower case letters. Write a function that takes in these two arrays and finds the greatest possible difference in length between two strings, if one is selected from each array. For example:

var s1 = ["hoqq", "bbllkw", "oox"];
var s2 = ["ccc", "gfhhh", "t"];
// maxLengthDif(s1, s2); --> 5

// find the longest str from s1 and from s2. compare them and return the longest. do the same for the min, then subract the length of the smaller str from the length of the larger string
function maxLengthDif(s1, s2) {
  var s1LengthMap = mapArrayToStringLengths(s1);
  var s2LengthMap = mapArrayToStringLengths(s2);

  var s1Min = findMinimum(s1LengthMap);
  var s1Max = findMaximum(s1LengthMap)
  var s2Min = findMinimum(s2LengthMap)
  var s2Max = findMaximum(s2LengthMap);

  var max = Math.max.apply(null, [s1Max].concat([s2Max]))
  var min = Math.min.apply(null, [s1Min].concat([s2Min]))

  return max - min;
}

console.log(maxLengthDif(s1, s2))

// take an arr of strings, return the length of each
function mapArrayToStringLengths(array) {
  return array.map(function(string) {
      return string.length;
  });
}

// find min val
function findMinimum(array) {
  return Math.min.apply(null, array)
}

// find max val
function findMaximum(array) {
  return Math.max.apply(null, array);
}

// Question 3
// Write a function that sorts the inner content of every word of a sentence, as a string, in ascending order (a-z). The inner content of a word is the content without the first and the last characters. For any words with a prime number of letters, sort the inner content in descending instead of ascending order (z-a). The string will contain only letters and spaces.
//
//  Example output: strangeSort(“science was my favorite subject”) --> “sniecce was my faiortve sujecbt”

// write an isPrime helper function, which will determine if length of str is prime

function isPrime(n) {
  for(let i = 2; i < n; i++) {
    if(n % i === 0) {
      return false
    }
  }
  return n !== 1
}

// write a sortInteriorAsc helper function , which will isolate the first and lwast letter of a str and sort the rest (asc)

function sortInteriorAsc(str) {
  var interior = str.substring(1, str.length - 1).split("").sort(function(a, b) {
    return a.toLowerCase() > b.toLowerCase()
  }).join("")

  return str[0] + interior + str[str.length - 1]
}

// write a sortInteriorDesc helper function, which will isolate the first and last letter of a str and sort the rest (desc)

function sortInteriorDesc(str) {
  var interior = str.substring(1, str.length - 1).split("").sort(function(a, b) {
    return a.toLowerCase() < b.toLowerCase()
  }).join("")

  return str[0] + interior + str[str.length - 1]
}

// write function sortAccordingly, which will split the string at each word and will sort the interior chars of word in descending order if the length of the word is prime. else, sort ascending

function sortAccordingly(str) {
  return str.split(" ").map(function(word) {
    if(isPrime(word.length)) {
      return sortInteriorDesc(word)
    } else {
      return sortInteriorAsc(word)
    }
  }).join(" ")
}

console.log(sortAccordingly("science was my favorite subject") ===
"sniecce was my faiortve sujecbt")
