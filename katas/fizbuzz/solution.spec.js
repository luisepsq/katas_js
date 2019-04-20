import fizzBuzz from './solution'

describe ('Fizzbuzz App', () => {
	test('número es divisible por 3', () => {
	  expect(fizzBuzz(6)).toBe('Fizz');
	});
	test('número es divisible por 5', () => {
		expect(fizzBuzz(10)).toBe('Buzz');
	});
	test('número es divisible por 3 y por 5', () => {
		expect(fizzBuzz(30)).toBe('FizzBuzz');
	});
	test('número no es divisible por 3 y por 5 a la vez', () => {
		expect( (fizzBuzz(4) === '4') || (fizzBuzz(4) === 4 ) ).toBe(true);
	});
});