# sparse-ts

Un'implementazione della struttura `SparseArray<T>` in TypeScript per rappresentare array sparsi con valore di default.

## Come usare

```ts
import { SparseArray } from "./src/SparseArray";

const arr = new SparseArray<number>(0);
arr.wr(3, 1);
arr.wr(10, 2);

console.log([...arr]); // [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2]
```
