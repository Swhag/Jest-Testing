let alphabet = 'abcdefghijklmnopqrstuvwxyz';

function isLowerCase(char) {
  if (char == char.toLowerCase() && char != char.toUpperCase()) {
    return true;
  }

  return false;
}

function isUpperCase(char) {
  if (char == char.toUpperCase() && char != char.toLowerCase()) {
    return true;
  }

  return false;
}

function shiftAlphabet(offset) {
  let a = alphabet.slice(0, offset);
  let b = alphabet.slice(offset, 25);

  if (offset < 0) {
    b = alphabet.slice(offset, 25 + Math.abs(offset));
  }
  return b + a;
}

function shiftCharacter(char, offset) {
  let shiftedAlphabet = shiftAlphabet(offset);
  let index = alphabet.indexOf(char.toLowerCase());
  let shiftedCharacter = shiftedAlphabet[index];
  return shiftedCharacter;
}

// ---------------------------------------------------------

function caesarCipher(string, offset = null) {
  if (typeof string !== 'string') {
    return 'not a string';
  }

  if (typeof offset !== 'number' || offset === null) {
    return 'please provide offset number value';
  }

  let shiftedString = '';

  for (let i = 0; i < string.length; i++) {
    if (isLowerCase(string[i])) {
      shiftedString += shiftCharacter(string[i], offset);
    } else if (isUpperCase(string[i])) {
      shiftedString += shiftCharacter(string[i], offset).toUpperCase();
    } else {
      shiftedString += string[i];
    }
  }

  return shiftedString;
}

export default caesarCipher;
// export { isLowerCase, isUpperCase, shiftCharacter, caesarCipher };
