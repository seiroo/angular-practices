function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiplay(
  firstNumber: number,
  SecondNumber?: number,
  Base: number = 2
): number {
  return firstNumber * Base;
}

// const resultRest = addNumbersArrow(5, 10);
// const result = addNumbers(1, 2);
// const multiplayResult = multiplay(12, 15);

// console.log(result, resultRest, multiplayResult);
