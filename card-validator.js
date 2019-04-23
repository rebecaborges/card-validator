function cardValidator(number) {
  let lengthNumber = number.toString()
  let result =[];

  for(i in lengthNumber){
    // console.log(i)
    
    if(i % 2 === 0){
      let multiplyIndex = lengthNumber[i] * 2;
      // result.push(multiplyIndex);

        if(multiplyIndex > 9){
          result.push(multiplyIndex -9);
        }
    }else{
      result.push(Number(lengthNumber[i]));
    };
  };
  console.log(result)
};
cardValidator(54329)


//soma de todos os nºs % 10

// //função de somar array

// for(i in array){
//   let soma = array.reduce(function(anterior,atual){
//     return anterior + atual;

//   })
// console.log(soma)
  
// }