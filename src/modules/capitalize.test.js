import capitalize from './capitalize';

test('capitalizes first letter of a string', () => {
  expect(capitalize('apple')).toBe('Apple');
});
