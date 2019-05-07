function cardValidator(number) {
  if (!number
    || typeof number === "string" 
    || number.toString().length < 14
    || number.toString().length > 19)
    {
    return false;
    }else {
    const lengthNumber = number.toString();
    const result = [];

    multiplyNumbers(lengthNumber, result);
    return moduleAddAll(result);
  }
}

function multiplyNumbers(lengthNumber, result) {
  for (let i in lengthNumber) {
    if (i % 2 === 0) {
      const multiplyIndex = lengthNumber[i] * 2;
      multiplyIndex > 9 ? result.push(multiplyIndex - 9) : result.push(multiplyIndex);
    } else {
      result.push(Number(lengthNumber[i]));
    }
  }
}

function addAll(result) {
  return result.reduce((acc, cur) => acc + cur);
}

function moduleAddAll(result) {
  return (addAll(result) % 10 === 0);
}

module.exports = cardValidator;