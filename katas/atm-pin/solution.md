# atm pin
My solution:

Using regex
```javascript
const validatePIN =(pin)=>  /^(\d{4}|\d{6})$/.test(pin);
module.exports = validatePIN;
```


Without regex
```javascript
const validatePIN =(pin)=> {
    const noNaNArray=(number)=>{
        let cont=0;
         numbers.forEach(number=>number-number!==0  && cont++)
         return !cont>0  
    }
  const numbers=pin.replace('\n','a').replace(' ','a').split('').map(Number)
    
  return ( noNaNArray() && (numbers.length===4 || numbers.length===6))
  }

  module.exports = validatePIN;
  ```