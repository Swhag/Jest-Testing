import caesarCipher from './caesarCipher';

test('returns it with each character “shifted” by offset value', () => {
  expect(caesarCipher('JavaScript Example', 1)).toBe('KbwbTdsjqu Fybnqmf');
});

test('returns it with each character “shifted” by offset value', () => {
  expect(caesarCipher('JavaScript Example', -1)).toBe('IzuzRbqhos Dwzlokd');
});

test('input value must be string type', () => {
  expect(caesarCipher(123)).toBe('not a string');
});

test('offset value must be provided as number type', () => {
  expect(caesarCipher('hello')).toBe('please provide offset number value');
});
