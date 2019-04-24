function cardValidator(number) {
  const lengthNumber = number.toString();
  const result =[];

  for(let i in lengthNumber){

    if(i % 2 === 0){
      const multiplyIndex = lengthNumber[i] * 2;
      multiplyIndex > 9 ? result.push(multiplyIndex -9) : result.push(multiplyIndex);

    }else{
      result.push(Number(lengthNumber[i]));
    };
  };
  
  const sumAll = result.reduce((acc,cur) => acc + cur);
  return sumAll % 10 === 0 ? console.log("cartão válido") : console.log("cartão inválido"); 
};
// cardValidator(5502098769227998);

var card = require("./lib/index.js");
module.exports.cardValidator= cardValidator;


