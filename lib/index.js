function cardValidator(number) {
  const lengthNumber = number.toString ();
  const result = [];

  for (let i in lengthNumber) {
    if (i % 2 === 0) {
      const multiplyIndex = lengthNumber[i] * 2;
      multiplyIndex > 9 ? result.push (multiplyIndex - 9) : result.push (multiplyIndex);
    } else {
      result.push (Number (lengthNumber[i]));
    }
  }
  
  const sumAll = result.reduce ((acc, cur) => acc + cur);
  if (sumAll % 10 === 0) {
    return true;
  } else {
    return false;
  }
}
module.exports.cardValidator = cardValidator;