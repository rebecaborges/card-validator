function cardValidator(number) {

  let lengthNumber = number.toString()
  // pq com parseInt ele fica undefined e com toString ele funciona?
    

  for(num in lengthNumber){
    
    if(num % 2 === 0){

      let multiplyIndex = lengthNumber.charAt(num) * 2;
      
      if(multiplyIndex > 9){
        console.log("maior que 9, indice: "+ num)
      }

      console.log(multiplyIndex)

    }else{
      console.log(lengthNumber.charAt(num))
    }
  }

}
cardValidator(54923798)


//soma de todos os nºs % 10

// //função de somar array

// for(i in array){
//   let soma = array.reduce(function(anterior,atual){
//     return anterior + atual;

//   })
// console.log(soma)
  
// }