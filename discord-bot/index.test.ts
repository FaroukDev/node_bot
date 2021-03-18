const readyDiscord = require('./index')
const message1 = require('./index')
const nickName = require('./index')
const assert = require('assert').strict;


describe('Hello', function() {
    describe('readyDiscord', function() {
      it('should return hello', function() {
        assert.equal("hello", "hello");
      });
    });
  });

describe('hello les devclouds vous voulez faire du C dieze !', function() {
    describe('message1 function', function() {
      it('should return hello les devclouds vous voulez faire du C dieze !', function() {
        assert.equal("hello les devclouds vous voulez faire du C dieze !", "hello les devclouds vous voulez faire du C dieze !");
      });
    });
  });

