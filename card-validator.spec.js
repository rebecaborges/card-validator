let chai = require("chai");
let expect = chai.expect;
let lib = require("../lib/chess");

describe("rainha vence cavalo", ()=> {
   it("queen", ()=> {
     expect(lib.chessWin("horse","queen")).to.equal("queen")
   });

   it("horse", ()=> {
    expect(lib.chessWin("horse","queen")).to.equal("queen")
  });
});