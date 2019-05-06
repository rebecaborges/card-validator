const chai = require("chai");
const expect = chai.expect;
const lib = require("../lib/index");

describe("cardValidator()", ()=> {
   it("for random numbers returns false", ()=> {
    expect(lib.cardValidator("02029330")).to.equal(false)
   });
   it("for repeated numbers of type string returns false", ()=> {
    expect(lib.cardValidator("000000000000000000")).to.equal(false)
  });
   it("for empty field of type string returns false", ()=> {
    expect(lib.cardValidator("")).to.equal(false)
  });
  it("for field with spaces of type string returns false", ()=> {
    expect(lib.cardValidator("         ")).to.equal(false)
  });
  it("for field with empty spaces returns false", ()=> {
    expect(lib.cardValidator(         )).to.equal(false)
  });
  it("for empty field returns false", ()=> {
    expect(lib.cardValidator()).to.equal(false)
  });
   it("for field with random numbers returns false", ()=> {
    expect(lib.cardValidator(00000012334)).to.equal(false)
  });
  it("should return true for credit card, Mastercard", ()=> {
    expect(lib.cardValidator(5555666677778884)).to.equal(true)
  });
  it("should return true for credit card, Visa", ()=> {
    expect(lib.cardValidator(4012001037141112)).to.equal(true)
  });
  it("should return true for credit card, Dinners Club", ()=> {
    expect(lib.cardValidator(36490102462661)).to.equal(true)
  });
  it("should return true for credit card, Hiper", ()=> {
    expect(lib.cardValidator(6370950000000005)).to.equal(true)
  });
  it("should return true for credit card, Hipercard", ()=> {
    expect(lib.cardValidator(6062825624254001)).to.equal(true)
  });
  it("should return true for credit card, Elo", ()=> {
    expect(lib.cardValidator(4389354449889082)).to.equal(true)
  });
});