const chai = require("chai");
const expect = chai.expect;
const cardValidator = require("../lib/index");

describe("cardValidator()", ()=> {
   it("for random numbers returns false", ()=> {
    expect(cardValidator("02029330")).to.equal(false)
   });
   it("for repeated numbers of type string returns false", ()=> {
    expect(cardValidator("000000000000000000")).to.equal(false)
  });
   it("for empty field of type string returns false", ()=> {
    expect(cardValidator("")).to.equal(false)
  });
  it("for field with spaces of type string returns false", ()=> {
    expect(cardValidator("         ")).to.equal(false)
  });
  it("for field with empty spaces returns false", ()=> {
    expect(cardValidator(         )).to.equal(false)
  });
  it("for empty field returns false", ()=> {
    expect(cardValidator(NaN)).to.equal(false)
  });
   it("for field with random numbers returns false", ()=> {
    expect(cardValidator(00000012334)).to.equal(false)
  });
  it("should return true for credit card, Mastercard", ()=> {
    expect(cardValidator(5555666677778884)).to.equal(true)
  });
  it("should return true for credit card, Visa", ()=> {
    expect(cardValidator(4012001037141112)).to.equal(true)
  });
  it("should return true for credit card, Dinners Club", ()=> {
    expect(cardValidator(36490102462661)).to.equal(true)
  });
  it("should return true for credit card, Hiper", ()=> {
    expect(cardValidator(6370950000000005)).to.equal(true)
  });
  it("should return true for credit card, Hipercard", ()=> {
    expect(cardValidator(6062825624254001)).to.equal(true)
  });
  it("should return true for credit card, Elo", ()=> {
    expect(cardValidator(4389354449889082)).to.equal(true)
  });
  it("should return true for credit card, enRoute", ()=> {
    expect(cardValidator(214903641058372)).to.equal(true)
  });
  it("false returns to less than 16", ()=> {
    expect(cardValidator(12345678910)).to.equal(false)
  });
  it("returns false to greater than 19", ()=> {
    expect(cardValidator(45676789987990087665432232323232)).to.equal(false)
  });
});