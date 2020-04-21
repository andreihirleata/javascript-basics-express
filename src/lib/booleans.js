const negate = a => {
  return !a;
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
};

const none = (a, b) => {
  return !a && !b;
};

const one = (a, b) => {
  if ((a && !b) || (!a && b)) return true;
  return false;
};

const truthiness = a => {
  if (a) return true;
  return false;
};

const isEqual = (a, b) => {
  if (a === b) return true;
  return false;
};

const isGreaterThan = (a, b) => {
  if (a > b) return true;
  return false;
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) return true;
  return false;
};

const isOdd = a => {
  if (a % 2 === 1) return true;
  return false;
};

const isEven = a => {
  if (a % 2 === 0) return true;
  return false;
};

const isSquare = a => {
  if (Math.sqrt(a) % 1 === 0) return true;
  return false;
};

const startsWith = (char, string) => {
  if (string.charAt(0) === char) return true;
  return false;
};

const containsVowels = string => {
  let isTrue = false;
  const vowels = ["a", "e", "i", "o", "u"];
  const lowerCaseString = string.toLowerCase();
  for (let i = 0; i < string.length; i += 1) {
    for (let j = 0; j < vowels.length; j += 1) {
      if (lowerCaseString.charAt(i) === vowels[j]) isTrue = true;
    }
  }
  return isTrue;
};

const isLowerCase = string => {
  if (string.toLowerCase() === string) return true;
  return false;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
