//Function takes in two arrays and will return how similar they are
//Similarity is defined as having the same value in the same index
//Arrays must be of the same length

var similarity = function(array1, array2) {
	
	if (array1.length !== array2.length) {						//If arrays are of different lengths an error message is returned
		return 'Arrays are of different lengths.';
	}
	
	if (array1.length == 0 || array2.length == 0) {					//If arrays have no values, then an error message is returned
		return 'An array was not inputted.';
	}

	var same = 0;									//Variables for counting similar or different hits
	var different = 0;

	for (i=0; i < array1.length; i++) {						//If a hit is made, the same variable is increased
		if (array1[i] === array2[i]) {
			same++;
		}
		else if (array1[i] !== array2[i]) {					//If the numbers are different, the different variable is increased
			different++;
		}
	}

	var percentSame = ((same / array1.length) * 100).toPrecision(4);		//Percentages are calculated
	var percentDifferent = ((different / array1.length) * 100).toPrecision(4);

	return 'The two arrays had ' + same + ' similar hit(s), and ' + different + ' different hit(s). ' + percentSame + '% is similiar and ' + percentDifferent + '% is different.';
}
