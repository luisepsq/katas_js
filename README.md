#**katas_js**
   katas_js is a compilation of Javascript katas tested with Jest, every Kata folder contains: 
  * Kata decription ('.md' file).
  * solution.js file where you have to implement your solution.
  * solution.md markdown file with my solution. 
  * solution.spec.js a js file implemented with jest to test your solution.
  
  Once you dowload or clone execute yarn in your command line to install Jest node package and enable katas testing.
  All test are skiped to prevent fault while you havent complete the logic,change 'xdescribe => describe' in the test file.
  ```javascript
  xdescribe('validatePIN', ()=> {
    it('should return False for pins with length other than 4 or 6',()=> {
        expect(validatePIN('1')).toBe(false);
        expect(validatePIN('12')).toBe(false);
  ```
  
  Feel free to collaborate by PR with a new kata or your solution to the provided kata.
  
  
