import fizzBuzz from './solution'

xdescribe ('Fizzbuzz App', () => {
	it('número es divisible por 3', () => {
	  expect(fizzBuzz(6)).toBe('Fizz');
	});
	it('número es divisible por 5', () => {
		expect(fizzBuzz(10)).toBe('Buzz');
	});
	it('número es divisible por 3 y por 5', () => {
		expect(fizzBuzz(30)).toBe('FizzBuzz');
	});
	it('número no es divisible por 3 y por 5 a la vez', () => {
		expect( (fizzBuzz(4) === '4') || (fizzBuzz(4) === 4 ) ).toBe(true);
	});
});