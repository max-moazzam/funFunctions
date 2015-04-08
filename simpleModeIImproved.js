//Function that takes in an array parameter and returns all the modes in an array, or -1 if there are not any
//Based on CoderByte Medium Challenge Simple Mode I
//Main difference is this function will return ALL the modes!

function SimpleMode(arr) { 
  var repeatCount = [];                       //Array for keep track of the amount of number repeats is declared
  for (j=0; j < arr.length; j++) {            //The first loop goes through each number one at a time
  repeatCount[j] = -1;                        //The count starts at -1, because the number will count itself as a match
    for (i=0; i < arr.length; i++) {          //That individual number is then matched against every number in the array with another loop
      if (arr[j] === arr[i]) {
          repeatCount[j] += 1;                //If a match is made the count is increased so that an array of counts is made
      }
    }
  }

  var largestRepeat = 0;                      //Variable to access the largest repeat is declared

  for (i=0; i < repeatCount.length; i++) {    //Loop will check entire count array to find what the largest repeat was
      if (largestRepeat < repeatCount[i]) {
        largestRepeat = repeatCount[i];
      }
  }
  
  var modeIndexes = [];                       //Array to access the indexes of the modes in the array is declared

  for (i=0; i < repeatCount.length; i++) {
      if (repeatCount[i] === largestRepeat) { //Everytime the count of repeats equals the largestRepeat (i.e. the mode) the index of that count is pushed
          modeIndexes.push(i)
      }
  }

  var modes = [];                             //Array to access all the modes is declared

  for (i=0; i < modeIndexes.length; i++) {
      modes.push(arr[modeIndexes[i]]);        //Using the indexes of the modes in the array, they are extracted and put into the modes array
  }

  modes.sort(function compareNumbers(a, b) {  //The modes array is sorted in ascending order
          return a - b;
          });
   
  for (i=0; i < modes.length; i++) {          //Loop will go through each element to see if there is a match with a previous element
    if (modes[i-1]===modes[i]) {
      modes.splice(i-1,1);                    //If there is it is removed, this prevents any repeating numbers in the array
      i=0;
    }
  }

  if (largestRepeat === 0) {                  //If there is no modes -1 is returned
    return -1
  }
  else if (largestRepeat > 0) {               //If there are repeats, the array of modes is returned
    return modes
  }
}