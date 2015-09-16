/*
  This function should accept a string as a parameter.
  It should return a string with the parameter's contents, reversed.
  Note: No using string.reverse() or array.reverse(), that's cheating :)
*/
var reverseWord = function(word) {
  var newWord = word.split("");
  var reverseWord = "";
  for (i = word.length - 1; i >= 0; i--) {
    reverseWord += newWord[i];
  }
  return reverseWord;
}


/*
  This function should accept a string as a parameter.
  It should..
  - Break up the string into words (words are separated by spaces)
  - Reverse the contents of each word
  - Return a string that contains each reversed word, in order
*/
var reverseSentence = function(sentence) {
  var sentenceSplit = [];
  var words = "";
  sentenceSplit = sentence.split(" ");
  for (j = 0; j < sentenceSplit.length; j++) {
    words += reverseWord(sentenceSplit[j]) + " ";
  }
  return words.trim();
}
 reverseSentence("My name is Natasha");
