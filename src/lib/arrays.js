const getNthElement = (index, array) => {
  if (index >= array.length) return array[index % array.length];
  return array[index];
};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  const result = string.split(`,`);
  return result;
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const secondArray = array.concat(element);
  return secondArray;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(number => number.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(string =>
    string
      .split("")
      .reverse()
      .join("")
  );
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.slice(0, index).concat(array.slice(index + 1));
};

const elementsStartingWithAVowel = strings => {
  return (
    strings
      // .map(string => string.toLowerCase()) ??? should work
      .filter(
        string =>
          string.charAt(0) === `a` ||
          string.charAt(0) === `e` ||
          string.charAt(0) === `i` ||
          string.charAt(0) === `o` ||
          string.charAt(0) === `u` ||
          string.charAt(0) === `A` ||
          string.charAt(0) === `E` ||
          string.charAt(0) === `I` ||
          string.charAt(0) === `O` ||
          string.charAt(0) === `U`
      )
  );
};

const removeSpaces = string => {
  return string.replace(/\s/g, "");
};

const sumNumbers = numbers => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return numbers.reduce(reducer);
};

const sortByLastLetter = strings => {
  return strings
    .map(string =>
      string
        .split("")
        .reverse()
        .join("")
    )
    .sort()
    .map(string =>
      string
        .split("")
        .reverse()
        .join("")
    );
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
