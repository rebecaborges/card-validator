let chai = require("chai");
let expect = chai.expect;
let lib = require("../lib/index");

describe("cardValidator()", ()=> {
   it("deve retornar cartao inválido", ()=> {
     expect(lib.cardValidator("number")).to.equal("01isaskjalkasjlks01")
   });
  //  it("deve retornar cartão válido", ()=> {
  //   expect(lib.cardValidator("number")).to.equal("5502098769227998")
  // });
});