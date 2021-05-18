/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  //it('Throws an error so it fails', function() {
    //throw new Error('Delete me!');
 // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num) {
      return num / 2 === 0;
    };
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num) {
      return num / 2 === 0;
    };

    if (even(10) !== false) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    //throw new Error('Delete me!');
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('3934567890123') === 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if (isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') !== 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') !== 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  var should = chai.should();

  it('has a prefix of 51 and a length of 16', function() {
    (detectNetwork('5112345678901234')).should.equal('MasterCard');
  });
  it('has a prefix of 52 and a length of 16', function() {
    (detectNetwork('5212345678901234')).should.equal('MasterCard');
  });
  it('has a prefix of 53 and a length of 16', function() {
    (detectNetwork('5312345678901234')).should.equal('MasterCard');
  });
  it('has a prefix of 54 and a length of 16', function() {
    (detectNetwork('5412345678901234')).should.equal('MasterCard');
  });
  it('has a prefix of 55 and a length of 16', function() {
    (detectNetwork('5512345678901234')).should.equal('MasterCard');
  });

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });
});

describe('Discover', function() {

  var should = chai.should();
  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011345678901234').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011456789012345678').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6511345678901234').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6511456789012345678').should.equal('Discover');
  });
});


describe('Discover', function() {
  var should = chai.should();
  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(currentPrefix) {
      it('has a prefix of ' + currentPrefix + ' and a length of 16', function() {
        detectNetwork(currentPrefix + '1345678901234').should.equal('Discover');
      });
      it('has a prefix of ' + currentPrefix + ' and a length of 19', function() {
        detectNetwork(currentPrefix + '1456789012345678').should.equal('Discover');
      });
    })(prefix);
  }
});


describe('Maestro', function() {
  var should = chai.should();
  var count = '0';

  for (var i = 12; i < 20; i++ ) {
    //console.log('i ' + i + 'count' + count);
    var testString = '50184567891' + count;
    var testString1 = '50204567891' + count;
    var testString2 = '50384567891' + count;
    var testString3 = '63044567891' + count;
    //console.log('length ' + len.length);
    (function(test, i) {
      it('has a prefix of 5018 and a length of ' + i, function() {
        detectNetwork(test).should.equal('Maestro');
      });
    })(testString, i);

    (function(test, i) {
      it('has a prefix of 5020 and a length of ' + i, function() {
        //console.log('i Before Second detectNetwork' + i);
        detectNetwork(test).should.equal('Maestro');
      });
    })(testString1, i);

    (function(test, i) {
      it('has a prefix of 5038 and a length of ' + i, function() {
        //console.log('i Before Second detectNetwork' + i);
        detectNetwork(test).should.equal('Maestro');
      });
    })(testString2, i);

    (function(test, i) {
      it('has a prefix of 6304 and a length of ' + i, function() {
        detectNetwork(test).should.equal('Maestro');
      });
    })(testString3, i);

    count += '0';
  }
});


describe('China UnionPay', function() {
  var should = chai.should();
  for (var j = 622126; j <= 622925; j++ ) {
    (function(j) {
      var testString = j + '1845678901';
      it('has a prefix of ' + j + ' and a length of ' + 16, function() {
        detectNetwork(testString).should.equal('China UnionPay');
      });
    })(j);
  }

  for (var j = 622126; j <= 622925; j++ ) {
    (function(j) {
      var testString = j + '18456789012';
      it('has a prefix of ' + j + ' and a length of ' + 17, function() {
        detectNetwork(testString).should.equal('China UnionPay');
      });
    })(j);
  }

  for (var j = 622126; j <= 622925; j++ ) {
    (function(j) {
      var testString = j + '184567890123';
      it('has a prefix of ' + j + ' and a length of ' + 18, function() {
        detectNetwork(testString).should.equal('China UnionPay');
      });
    })(j);
  }

  for (var j = 622126; j <= 622925; j++ ) {
    (function(j) {
      var testString = j + '1845678901234';
      it('has a prefix of ' + j + ' and a length of ' + 19, function() {
        detectNetwork(testString).should.equal('China UnionPay');
      });
    })(j);
  }

  for (var j = 624; j <= 626; j++ ) {
    (function(j) {
      it('has a prefix of ' + j + ' and a length of ' + 16, function() {
        detectNetwork(j + '1845678901234').should.equal('China UnionPay');
      });
    })(j);
  }

  for (var j = 624; j <= 626; j++ ) {
    (function(j) {
      it('has a prefix of ' + j + ' and a length of ' + 17, function() {
        detectNetwork(j + '18456789012345').should.equal('China UnionPay');
      });
    })(j);
  }

  for (var j = 624; j <= 626; j++ ) {
    (function(j) {
      it('has a prefix of ' + j + ' and a length of ' + 18, function() {
        detectNetwork(j + '184567890123456').should.equal('China UnionPay');
      });
    })(j);
  }

  for (var j = 624; j <= 626; j++ ) {
    (function(j) {
      it('has a prefix of ' + j + ' and a length of ' + 19, function() {
        detectNetwork(j + '1845678901234567').should.equal('China UnionPay');
      });
    })(j);
  }

  for (var j = 6282; j <= 6288; j++ ) {
    (function(j) {
      it('has a prefix of ' + j + ' and a length of ' + 16, function() {
        detectNetwork(j + '184567890123').should.equal('China UnionPay');
      });
    })(j);
  }

  for (var j = 6282; j <= 6288; j++ ) {
    (function(j) {
      it('has a prefix of ' + j + ' and a length of ' + 17, function() {
        detectNetwork(j + '1845678901234').should.equal('China UnionPay');
      });
    })(j);
  }

  for (var j = 6282; j <= 6288; j++ ) {
    (function(j) {
      it('has a prefix of ' + j + ' and a length of ' + 18, function() {
        detectNetwork(j + '18456789012345').should.equal('China UnionPay');
      });
    })(j);
  }

  for (var j = 6282; j <= 6288; j++ ) {
    (function(j) {
      it('has a prefix of ' + j + ' and a length of ' + 19, function() {
        detectNetwork(j + '184567890123456').should.equal('China UnionPay');
      });
    })(j);
  }
});



describe('Switch', function() {
  var should = chai.should();

  var prefixofFourArray = ['4903', '4905', '4911', '4936', '6333', '6759'];
  var prefixofSixArray = ['564182', '633110'];
  for (var i = 0; i < prefixofFourArray.length; i++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {

        detectNetwork(prefix + '184567890123').should.equal('Switch');
      });
    })(prefixofFourArray[i]);
  }

  for (var i = 0; i < prefixofSixArray.length; i++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix + '1845678901').should.equal('Switch');
      });
    })(prefixofSixArray[i]);
  }

  for (var i = 0; i < prefixofFourArray.length; i++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        detectNetwork(prefix + '18456789012345').should.equal('Switch');
      });
    })(prefixofFourArray[i]);
  }

  for (var i = 0; i < prefixofSixArray.length; i++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        detectNetwork(prefix + '184567890123').should.equal('Switch');
      });
    })(prefixofSixArray[i]);
  }

  for (var i = 0; i < prefixofFourArray.length; i++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(prefix + '184567890123456').should.equal('Switch');
      });
    })(prefixofFourArray[i]);
  }

  for (var i = 0; i < prefixofSixArray.length; i++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(prefix + '1845678901234').should.equal('Switch');
      });
    })(prefixofSixArray[i]);
  }

});



