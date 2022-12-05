let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let cipher = 'bcdefghijklmnopqrstuvwxyza';

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
function characterCipher(char) {
  let index = alphabet.indexOf(char.toLowerCase());
  let cipherCharacter = cipher[index];
  return cipherCharacter;
}

// ---------------------------------------------------------

function caesarCipher(string) {
  if (typeof string !== 'string') {
    return 'not a string';
  }

  let shiftedString = '';

  for (let i = 0; i < string.length; i++) {
    if (isLowerCase(string[i])) {
      shiftedString += characterCipher(string[i]);
    } else if (isUpperCase(string[i])) {
      shiftedString += characterCipher(string[i]).toUpperCase();
    } else {
      shiftedString += string[i];
    }
  }

  return shiftedString;
}

export default caesarCipher;
export { isLowerCase, isUpperCase, characterCipher, caesarCipher };
