//mozila.org array.filter etc

var numbers = [3,56, 2, 48, 5]

function double(x){
  return x*2;
}

var out = numbers.map(function(x){
  return x*2;
});

document.write(out);

var newNumber = [];
function double(x){
  newNumber.push(x*2);
}
numbers.forEach(double);

//using arr for other arr
document.write(newNumber);

var number1 = numbers.filter(function (num){
               return num <=10 ;
               });
document.write(number1+" ");

var newNumber = [];
numbers.forEach(function(num){
  if(num>10){
    newNumber.push(num);
  }
})
document.write(newNumber);

//reduce func

var newNumber = numbers.reduce(function (accumlator,currentNumber){
  return accumlator + currentNumber;
})
// document.write(newNumber);
// var newNum = 0 ;
// numbers.forEach(function(curnum){
//   newNum +  curnum
  
// })

//find func stop when condition true 
//we can use find or findIndex
var number1 = numbers.find(function (num){
               return num <= 3 ;
               });
document.write(number1);

