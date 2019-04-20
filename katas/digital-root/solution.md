# Digital root solution

```javascript
const digital_root=(n)=> {
    const digits= n.toString().split('').map(Number);
    const sum =(acum,a)=> acum +a;
    const out= digits.reduce(sum).toString();
    return out.length >1 ? digital_root(out): Number(out);
    }
export default digital_root;
```
