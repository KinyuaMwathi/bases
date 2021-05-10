// Business Logic

function baseToDecimalConverter(number, base) {
  let stringToNumber = parseInt(number);
  let stringToBase = parseInt(base);
  if (stringToNumber < stringToBase) {
    return true;
  } else {
    return false;
  }
}