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
