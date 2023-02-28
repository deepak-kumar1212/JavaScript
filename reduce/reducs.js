const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => {
    console.log(accumulator);
    console.log(currentValue);
    return accumulator + currentValue},initialValue
);

console.log(sumWithInitial);