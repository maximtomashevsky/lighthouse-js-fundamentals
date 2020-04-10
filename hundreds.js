const howManyHundreds = function(num) {
  var remainder = num % 100;
  return ((num -= remainder)/100);
};

console.log(howManyHundreds(520));