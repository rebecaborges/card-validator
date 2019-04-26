let chai = require("chai");
let nyc = require("nyc");
let expect = chai.expect;
let lib = require("../lib/index");

describe("cardValidator()", ()=> {
   it("para numeros aleatórios retorna false", ()=> {
    expect(lib.cardValidator("02029330")).to.equal(false)
   });
   it("para campo vazio do tipo string retorna false", ()=> {
    expect(lib.cardValidator("")).to.equal(false)
  });
  it("para numero em string repetida retorna false", ()=> {
    expect(lib.cardValidator("000000000000000000")).to.equal(false)
  });
  it("para campo com string vazio retorna falso", ()=> {
    expect(lib.cardValidator("         ")).to.equal(false)
  });
  it("para campo com espacos vazio retorna falso", ()=> {
    expect(lib.cardValidator(         )).to.equal(false)
  });
  it("para campo vazio retorna falso", ()=> {
    expect(lib.cardValidator()).to.equal(false)
  });
   it("para campo com numeros aleatorios retorna falso", ()=> {
    expect(lib.cardValidator(0000000011223)).to.equal(false)
  });
  it("deve retornar true para cartão válido", ()=> {
    expect(lib.cardValidator(5555666677778884)).to.equal(true)
  });
  
});