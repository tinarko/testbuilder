// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {

  var l = cardNumber.length;
  var pre0 = cardNumber[0];
  var pre1 = cardNumber.substring(0,2);
  var pre2 = cardNumber.substring(0,3);
  var pre3 = cardNumber.substring(0,4);

  // The American Express network always starts with a 34 or 37 and is 15 digits long. (2 options total)

  if (l == 15 && (pre1 == 34 || pre1 == 37)){
  	return 'American Express';
  }

  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long. (2 options total)

  if (l == 14 && (pre1 == 38 || pre1 == 39)){
  	return 'Diner\'s Club';
  }

  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19. (16 options total)

  if ((l == 16 || l == 19) && (pre3 == 6011 || (pre2 >= 644 && pre2 <= 649) || pre1 == 65)){
  	return 'Discover';
  }

  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19. (32 options total)

  if ((pre3 == 5018 || pre3 == 5020 || pre3 == 5038 || pre3 == 6304) && l>=12 && l<=19){
  	return 'Maestro';
  }

  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  if (l == 16 && pre1 >= 51 && pre1 <= 55){
  	return 'MasterCard';
  }  

  // VISA always has a prefix of 4 and a length of 13, 16, or 19. (3 options total)
  if (pre0 == 4 && (l == 13 || l == 16 || l == 19)){
  	return 'Visa';
  }

};
