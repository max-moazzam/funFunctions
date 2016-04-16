//Function will take in an array parameter, and shuffle the numbers
//Function is based on the mergesort algorithm, it starts by splitting the numbers, and then recursively merging numbers in a random fashion

var shuffle = function(array) {
	if (array.length < 2) {											//Base case will stop the recursive function when the array only has one number
		return array;
	}

	var middle = (array.length / 2);								//Finds the middle of the array							
	var leftUnsorted = array.slice(0, middle);						//Splits at the middle into two equal parts
	var rightUnsorted = array.slice(middle, array.length);

  return mergeShuffle(shuffle(leftUnsorted), shuffle(rightUnsorted));	//Will recursively shuffle the array
} 

function mergeShuffle(leftUnsorted, rightUnsorted) {				//Function takes in two parameters a left and a right, and merges them together into one array

	var sorted = [];
																	//Variable declared to access the sorted array

	while (leftUnsorted.length && rightUnsorted.length) {
																	//If the left and right arrays both have data then this while loop is run
		var randomness = Math.random();
		if (randomness < .50) {					//If the first number of the left array is smaller than that of the right, it's cut out and put into the sorted array
			sorted.push(leftUnsorted.shift());
		}

		else {														//If the first number of the right array is smaller than that of the left, it's cut out and put into the sorted array
			sorted.push(rightUnsorted.shift());
		}
	}

	while (leftUnsorted.length) {									//If only the left array has numbers, the remaining numbers of the left array are added
		sorted.push(leftUnsorted.shift());
	}

	while (rightUnsorted.length) {									//If only the right array has numbers, the remaining numbers of the right array are added
		sorted.push(rightUnsorted.shift());
	}

return sorted;														//The sorted array is returned

}