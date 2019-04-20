# fizzbuzz solution
Using ES6 default parameters instead of values for best reusability
```javascript

const fizzBuzz=(length=100, fizzNumber=3, buzzNumber=5)=>{
	var output;
	for(var i=1;i<=length;i++){
		output = '';
		if(i%fizzNumber === 0){
			output+='Fizz';
		} 
		if(i%buzzNumber === 0){
			output+='Buzz';
		} 
		if(i%fizzNumber !== 0 && i%buzzNumber !== 0) {
			output+=i;
		}
		print(output);
    }
    return(output)
}
export default fizzBuzz;

```
without ES6 

```javascript
function fizzBuzz(number) {
	if ((number%3 !== 0) && (number%5 !== 0)) {
		return number;
	}
	if ((number%3 === 0) && (number%5 === 0)) {
		return 'FizzBuzz';
	}
	if (number%3 == 0) {
		return 'Fizz';
	}
	if (number%5 == 0) {
		return 'Buzz';
	}
}
module.exports = fizzBuzz;


```


