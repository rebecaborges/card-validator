function cardValidator(number) {
  if (!number || typeof number === "string") {
    return false;
  } else {
    const lengthNumber = number.toString();
    const result = [];

    multiplyNumbers(lengthNumber, result);

    if (addAll(result) % 10 === 0) {
      return true;
    } else {
      return false;
    }
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

module.exports.cardValidator = cardValidator;