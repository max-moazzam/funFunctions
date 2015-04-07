//Function will find all possible sums of numbers in an array
//Takes in an array parameter
//If no duplicates are desired a second parameter of 0 is accepted
//0 is also considered a possible sum, assuming none of the elements are added

var possibleSums = function (arr, duplicates) {
    var numberOfElements = arr.length;   
    var combinationChoices = [];

//All possible true (1) and false (0) combinations are made based on the amount of elements in the array

    for(binNumber=0; binNumber<Math.pow(2,numberOfElements); binNumber++) {
      var possibleCombinations = [];
        for(shift=0; shift < numberOfElements; shift++){
          if((binNumber >> shift) & 1) {
            possibleCombinations.push(1);                                   //If a true or 1 is found then 1 is pushed
          }
          else {
            possibleCombinations.push(0);
          }
        }
      combinationChoices.push(possibleCombinations);                        //This new set of combinations is then pushed to the overall choice array
    }


//Declare an array to access all possible summations
    var sum =[];

//Loop will match a possible combination choice (such as True True) with the array of numbers


    for (i=0; i < combinationChoices.length; i++) {                         //Will loop through the combination choices
      currentChoice = combinationChoices[i];
      sum[i] = 0;                                                           //Declares an original total
        for (j=0; j< currentChoice.length; j++) {                           //Loops through the current choice
          if (currentChoice[j] == 1) {
            sum[i] += arr[j];                                               //If true, then corresponding array value is added
          }
        }
    }
    if (duplicates===0){
      sum.sort(function compareNumbers(a, b) {
        return a - b;
      });
   
      for (i=0; i < sum.length; i++) {
        if (sum[i-1]===sum[i]) {
          sum.splice(i-1,1);
          i=0;
        }
      }
    }
    return sum
}