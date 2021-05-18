// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Warning: Regular Expressions (RegEx) are NOT ALLOWED on this assignment!

var detectNetwork = function(cardNumber) {
  //console.log(cardNumber);
  var firstFour = cardNumber.slice(0, 4);
  var firstThree = cardNumber.slice(0, 3);
  var firstTwo = cardNumber.slice(0, 2);
  var firstSix = cardNumber.slice(0, 6);

  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if ( cardNumber.length === 14 && cardNumber[0] === '3'
  && (cardNumber[1] === '8' || cardNumber[1] === '9')) {
    return 'Diner\'s Club';
  }
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  if ( cardNumber.length === 15 && cardNumber[0] === '3'
  && (cardNumber[1] === '4' || cardNumber[1] === '7')) {
    return 'American Express';
  }

  // For Visa, prefix is 4 and length 13, 16 or 19
  if (cardNumber[0] === '4' && (cardNumber.length === 13
  || cardNumber.length === 16 || cardNumber.length === 19 )) {
    if (firstFour === '4903' || firstFour === '4905' || firstFour === '4911' ||
    firstFour === '4936') {
      return 'Switch';
    } else {
      return 'Visa';
    }

  }

  //For MasterCard prefix 51, 52, 53, 54, or 55 and a length of 16.
  if ( (cardNumber.length === 16 && cardNumber[0] === '5')
  && (cardNumber[1] === '1' || cardNumber[1] === '2' || cardNumber[1] === '3'
  || cardNumber[1] === '4' || cardNumber[1] === '5')) {
    return 'MasterCard';
  }

  //For Discover
  if ((cardNumber.length === 16 || cardNumber.length === 19) && (firstFour === '6011' ||
  firstThree === '644' || firstThree === '645' ||
  firstThree === '646' || firstThree === '647' ||
  firstThree === '648' || firstThree === '649' ||
  firstTwo === '65') ) {
    return 'Discover';
  }

  //For Maestro
  var cardLength = false;
  for (var i = 12; i < 20; i++) {
    if (cardNumber.length === i) {
      cardLength = true;
      break;
    }
  }
  if (cardLength === true && (firstFour === '5018' ||
  firstFour === '5020' || firstFour === '5038' ||
  firstFour === '6304' ) ) {
    return 'Maestro';
  }

  // China UnionPay always has a prefix of
  //622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  var chinaPrefix = false;
  for (var prefix = 622126; prefix <= 622925; prefix++) {
    if (firstSix === prefix.toString()) {
      chinaPrefix = true;
      break;
    }
  }
  var chinaPrefix1 = false;
  for (var prefix1 = 624; prefix1 <= 626; prefix1++) {
    if (firstThree === prefix1.toString()) {
      chinaPrefix1 = true;
      break;
    }
  }

  var chinaPrefix2 = false;
  for (var prefix2 = 6282; prefix2 <= 6288; prefix2++) {
    if (firstFour === prefix2.toString()) {
      chinaPrefix2 = true;
      break;
    }
  }
  var chinaCardLength = false;
  for (var i = 16; i < 20; i++) {
    if (cardNumber.length === i) {
      chinaCardLength = true;
      break;
    }
  }
  if ((chinaPrefix === true || chinaPrefix1 === true || chinaPrefix2 === true)
  && chinaCardLength === true ) {
    return 'China UnionPay';
  }

  //Switch Switch always has a prefix of 4903, 4905, 4911,
  //4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  if ((cardNumber.length === 16 || cardNumber.length === 18 ||
    cardNumber.length === 19) && (firstFour === '4903' ||
  firstFour === '4905' || firstFour === '4911' ||
  firstFour === '4936' || firstFour === '6333' || firstFour === '6759' ||
  firstSix === '564182' || firstSix === '633110') ) {
    return 'Switch';
  }
};


