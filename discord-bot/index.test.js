const readyDiscord = require('./index')
const message = require('./index')
const nickName = require('./index')
const assert = require('assert').strict;
const chai = require('chai')
const should = chai.should()
const expect = chai.expect



describe("hello", function() {
    describe('readyDiscor', function() {
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

  describe('test nickname', function() {
    describe('nickname function', function() {
      it('should return "nick @<name> <newnickname>', function() {
        assert.equal("nick @<name><newnickname>","nick @<name><newnickname>" );
      });
    });
  });

