/*
  This function should accept an array of numbers as a parameter.
  It should return the sum of the members of the array.
*/
function sum (array) {
  var total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

/*
  This function should accept an array of numbers as a parameter.
  It should return the average of the members of the array.
*/
function average (array) {
  var total = 0;
  var avg = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
    avg = total / array.length;
  }
  return avg;
}
