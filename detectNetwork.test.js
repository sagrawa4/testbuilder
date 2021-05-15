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
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
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

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  var should = chai.should();

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });
});

/*var detectIssues = function(cardNumber) {
  var firstFour = cardNumber.slice(0, 4);
  var firstThree = cardNumber.slice(0, 3);
  var firstTwo = cardNumber.slice(0, 2);
  if ((cardNumber.length === 16 || cardNumber.length === 19) && (firstFour === '6011' ||
  firstThree === '644' || firstThree === '645' ||
  firstThree === '646' || firstThree === '647' ||
  firstThree === '648' || firstThree === '649' ||
  firstTwo === '65') ) {
    return 'Discover';
  }
};*/

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!

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

for (var prefix = 644; prefix <= 649; prefix++) {
  describe('Discover', function() {
    var should = chai.should();
    it('has a prefix of ' + prefix + ' and a length of 16', function() {
      detectNetwork('6441345678901234').should.equal('Discover');
      detectNetwork('6451345678901234').should.equal('Discover');
      detectNetwork('6461345678901234').should.equal('Discover');
      detectNetwork('6471345678901234').should.equal('Discover');
      detectNetwork('6481345678901234').should.equal('Discover');
      detectNetwork('6491345678901234').should.equal('Discover');
    });
    it('has a prefix of ' + prefix + ' and a length of 19', function() {
      detectNetwork('6441456789012345678').should.equal('Discover');
      detectNetwork('6451456789012345678').should.equal('Discover');
      detectNetwork('6461456789012345678').should.equal('Discover');
      detectNetwork('6471456789012345678').should.equal('Discover');
      detectNetwork('6481456789012345678').should.equal('Discover');
      detectNetwork('6491456789012345678').should.equal('Discover');
    });
  });
}


for (var i = 12; i < 20; i++ ) {
  describe('Maestro', function() {
    // Write full test coverage for the Maestro card
    var should = chai.should();
    it('has a prefix of 5018 and a length of ' + i, function() {
      detectNetwork('501845678901').should.equal('Maestro');
      detectNetwork('5018456789012').should.equal('Maestro');
      detectNetwork('50184567890123').should.equal('Maestro');
      detectNetwork('501845678901234').should.equal('Maestro');
      detectNetwork('5018456789012345').should.equal('Maestro');
      detectNetwork('50184567890123456').should.equal('Maestro');
      detectNetwork('501845678901234567').should.equal('Maestro');
      detectNetwork('5018456789012345678').should.equal('Maestro');
    });
    it('has a prefix of 5020 and a length of ' + i, function() {
      detectNetwork('502045678901').should.equal('Maestro');
      detectNetwork('5020456789012').should.equal('Maestro');
      detectNetwork('50204567890123').should.equal('Maestro');
      detectNetwork('502045678901234').should.equal('Maestro');
      detectNetwork('5020456789012345').should.equal('Maestro');
      detectNetwork('50204567890123456').should.equal('Maestro');
      detectNetwork('502045678901234567').should.equal('Maestro');
      detectNetwork('5020456789012345678').should.equal('Maestro');
    });
    it('has a prefix of 5038 and a length of ' + i, function() {
      detectNetwork('503845678901').should.equal('Maestro');
      detectNetwork('5038456789012').should.equal('Maestro');
      detectNetwork('50384567890123').should.equal('Maestro');
      detectNetwork('503845678901234').should.equal('Maestro');
      detectNetwork('5038456789012345').should.equal('Maestro');
      detectNetwork('50384567890123456').should.equal('Maestro');
      detectNetwork('503845678901234567').should.equal('Maestro');
      detectNetwork('5038456789012345678').should.equal('Maestro');
    });
    it('has a prefix of 6304 and a length of ' + i, function() {
      detectNetwork('630445678901').should.equal('Maestro');
      detectNetwork('6304456789012').should.equal('Maestro');
      detectNetwork('63044567890123').should.equal('Maestro');
      detectNetwork('630445678901234').should.equal('Maestro');
      detectNetwork('6304456789012345').should.equal('Maestro');
      detectNetwork('63044567890123456').should.equal('Maestro');
      detectNetwork('630445678901234567').should.equal('Maestro');
      detectNetwork('6304456789012345678').should.equal('Maestro');
    });
  });
}

/*describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var should = chai.should();
  it('has a prefix of 5018 and a length of 12', function() {
    detectMaestro('501845678901').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 13', function() {
    detectMaestro('5020456789012').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 14', function() {
    detectMaestro('50384567890123').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 15', function() {
    detectMaestro('630445678901234').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 16', function() {
    detectMaestro('5018456789012345').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 17', function() {
    detectMaestro('50184567890123456').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 18', function() {
    detectMaestro('501845678901234567').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 19', function() {
    detectMaestro('5018456789012345678').should.equal('Maestro');
  });

});*/


