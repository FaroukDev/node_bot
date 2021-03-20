const { expect } = require('chai');
const {mymessage1} = require('./index')

describe("test message1", function(){
    it("should return", () => {
        const msg = "hello les devclouds vous voulez faire du C dieze !";
        expect(msg).to.equal("hello les devclouds vous voulez faire du C dieze !")
    })
    it("it should return a message", () => {
        const m = mymessage1("hello les devclouds vous voulez faire du C dieze !")
        expect(m).to.have.property("message").to.equal("hello les devclouds vous voulez faire du C dieze !")
    })
})