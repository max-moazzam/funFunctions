//Function will create a random array
//Takes in 3 parameters: # of elements in the array, the maximum number, and the minimum number
//If no parameters are put in the defaults are elements: 10, maximum: 10, minimum: 0

var randomArray = function(elements, max, min) {
	
	if (elements <= 0 || max < min) {
		return 'Invalid parameters are used (elements must be higher than 0 and max cannot be lower than min)'
	}

	if (elements === undefined) {
		elements = 10;
	}
	
	if (max === undefined) {
		max = 10;
	}

	if (min === undefined) {
		min = 0;
	}
	
	var array = [];

	//A random number is selected for each index of the array
	//The math.random() function will find a number between [0 and 1)
	//1 is added to the resulting to include 1 since it is floored, it is floored to include zero as a possibility
	//It is then scaled by the max and minimum

	for (i=0; i < elements; i++) {
		array[i] = Math.floor((Math.random() * (max - min + 1)) + min);
	}	

return array;
}