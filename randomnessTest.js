//Function will run a test testing for randomness of a given randomizing function
//Will use a function countStart to assign a count for each element so that its occurence at a certain position can be measured
//Will then use another function, countAdd, to add occurences of an element at various positions to the count
//Will then log in the console the amount of times as a percentage per position an element is expected to occur
//Will then log in the console the percentage each element actually occured in a certain position

//Function takes in an array to be assesed, the number of times the array should be randomized and counted, and a randomizing function
//Note: A truly randomizing function will theoretically result in each element occuring in each position an equal amount of times
function randomnessTest(array, repeats, randomizeFunction) {
	//Create the log so that a count can be started
	var log = countStart(array);

	//Randomize an array a given amount of times, and add the position counts to the log
	for (var i = 0; i < repeats; i++) {
		var randomized = randomizeFunction(array);
		log = countAdd(log, randomized);
	}

	//Log in the console the expected frequency each element should occur at each position
	console.log('The expected frequency for each position is: ' + (100 / log.length).toPrecision(4) + '%');

	//Log for each element the percentage of times it occured at each position
	for (var i = 0; i < log.length; i++) {
		console.log(log[i][0]);
		
		for (var j = 1; j < log[i].length; j++) {
			var temp = (log[i][j] / repeats) * 100;
			console.log('Position ' + j + ': ' + temp.toPrecision(4) + "%");
		}
  	}
}

//Function will input an array and output an array where each element is an array consisting of an element of 
//the inputted array plus an amount of 0's corresponding to the number of elements in the inputted array
function countStart(array) {
	var positionCount = [];
	
	//Creates a new array in each index
	//Assigns the first element of the nested array to be an element of the inputted array corresponding to its index
	for (var i = 0; i < array.length; i++) {
		positionCount[i] = new Array(array[i]);
		var currentElement = positionCount[i];
	
	//Push an amount of 0's to each nested array corresponding to the length of the inputted array (i.e. if 3 elements in input then 3 0's pushed)
		for (var j = 0; j < array.length; j++) {
	  		currentElement.push(0);
		}
	
}

return positionCount;
}

//Function will input a log array and an array who's elements in the position are to be logged
//Function will loop through each element in the array to be logged
//For each element to be logged, a loop through the first element of each array within the log array will be done
//If a match is found, 1 is added to the log corresponding to 1 above the elements index (since the first element in the log is the element name)
function countAdd(countLog, toCount) {

	for (var i = 0; i < toCount.length; i++) {
  		for (var j = 0; j < countLog.length; j++) {
  			if (toCount[i] === countLog[j][0]) {
  				countLog[j][i+1]++;
  			}
  		}
	}

return countLog;
}