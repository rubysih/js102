var repeat = module.require('./index');
// console.log(repeat('*',4));

test('repeat * 4 times', () => {
  expect(repeat('*', 4)).toBe('****');
});