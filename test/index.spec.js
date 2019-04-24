let chai = require("chai");
let expect = chai.expect;
let lib = require("../lib/index");

describe("cardValidator()", ()=> {
   it("deve retornar cartao valido", ()=> {
     expect(lib.cardValidator("number")).to.equal("0101")
   });

  //  it("horse", ()=> {
  //   expect(lib.chessWin("horse","queen")).to.equal("queen")
  // });
});