const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	let tot = 0;
  return num1 - num2;
};

const sum = function(nums) {
	let tot = 0;
  for (const num of nums){
    tot+=num;
  }
  return tot;
};

const multiply = function(nums) {
	let tot = 0;
  for (let i = 0; i<nums.length-1; i++){
    tot += nums[i] * nums[i+1];
  }
  return tot;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  if (num === 0){
    return 1;
  }
	let fact = 1;
  for (i = 1; i <= num; i++) {
      fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
