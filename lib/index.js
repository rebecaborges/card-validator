function cardValidator(number) {
  if (!number
    || typeof number === "string" 
    || number.toString().length < 14
    || number.toString().length > 19) {
    return false;
  } else {
    const lengthNumber = number.toString();
    const  numbersArray = multiplyNumbers(lengthNumber);
    return moduleAddAll(numbersArray);
  }
}

function multiplyNumbers(lengthNumber) {
  const numbersArray = [];

  for (let i in lengthNumber) {
    if (i % 2 === 0) {
      const multiplyIndex = lengthNumber[i] * 2;
      multiplyIndex > 9 ? numbersArray.push(multiplyIndex - 9) : numbersArray.push(multiplyIndex);
    } else {
      numbersArray.push(Number(lengthNumber[i]));
    }
  }
  return numbersArray;
}

function addAll(array) {
  return array.reduce((acc, cur) => acc + cur);
}

function moduleAddAll(array) {
  return (addAll(array) % 10 === 0);
}

module.exports = cardValidator;