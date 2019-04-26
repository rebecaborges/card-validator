let chai = require("chai");
let nyc = require("nyc");
let expect = chai.expect;
let lib = require("../lib/index");

describe("cardValidator()", ()=> {
   it("deve retornar cartao inválido", ()=> {
    expect(lib.cardValidator("02029330")).to.equal(false)
   });
   it("deve retornar cartão inválido", ()=> {
    expect(lib.cardValidator("")).to.equal(false)
  });
  it("deve retornar cartão inválido", ()=> {
    expect(lib.cardValidator("000000000000000000")).to.equal(false)
  });
  it("deve retornar cartão inválido", ()=> {
    expect(lib.cardValidator(         )).to.equal(false)
  });
  it("deve retornar cartão inválido", ()=> {
    expect(lib.cardValidator()).to.equal(false)
  });
   it("deve retornar cartão válido", ()=> {
    expect(lib.cardValidator("5502098769227998")).to.equal(true)
  });
  
});