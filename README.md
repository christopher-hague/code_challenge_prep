Question 1
  1) Write a function that will take in a sentence, as a string, and return the same string, but with the letters randomly capitalized. That is, each letter character should be made lower case or upper case with a 50% chance of either outcome. However, any words in the original string that are in ALL CAPS should remain in ALL CAPS.
  2) Disregard the last rule if the entire original string is in ALL CAPS

Question 2
  The below code is intended to solve the following question... but it doesn’t seem to work! Rewrite the code so it works properly and correctly answers the question.

  1) You are given s1 and s1, two arrays of strings. Each string contains only lower case letters. Write a function that takes in these two arrays and finds the greatest possible difference in length between two strings, if one is selected from each array. For example:

s1 = [“hoqq”, “bbllkw”, “oox”];
s2 = [“ccc”, “gfhhh”, “t”];
maxLengthDif(s1, s2); --> 5

function maxLengthDif(s1, s2) {
  var s1LengthMap = mapArrayToStringLengths(s1);
  var s2LengthMap = mapArrayToStringLengths(s2);

  var s1Min = findMinimum(s1LengthMap);
  var s2Max = findMaximum(s2LengthMap);

  return s2Max - s1Min;
}

function mapArrayToStringLengths(array) {
    array.map(function(string) {
        string.length;
    });
}

function findMinimum(array) {
    return Math.min(array);
}

function  findMaximum(array) {
    return Math.max(array);
}


Question 3
Write a function that sorts the inner content of every word of a sentence, as a string, in ascending order (a-z). The inner content of a word is the content without the first and the last characters. For any words with a prime number of letters, sort the inner content in descending instead of ascending order (z-a). The string will contain only letters and spaces.

 Example output: strangeSort(“science was my favorite subject”) --> “sniecce was my faiortve sujecbt”

*/
