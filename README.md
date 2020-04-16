This is the source code repository for usage examples of ES2020 features. For explanation, you can refer to this article on my blog: https://olivier.codes/2020/04/12/ES2020-Summary-of-new-features-with-examples/


# ES2020 Examples
A set of examples of the new ES2020 javascript features :

- [Dynamic Import: await import(path)](./examples/dynamicImport.js)
- [BigInt()](./examples/bigInt.js)
- [Nullish Coalescing Operator (??)](./examples/nullishCoalescingOperator.js)
- [Optional Chaining Operator (?.)](./examples/optionalChainingOperator.js)
- [Private Variable in Class](./examples/privateClassVariables.js)
- [Promise.AllSettled](./examples/promiseAllSettled.js)
- [String.prototype.matchAll](./examples/matchAll.js)

# How to use ?
You must have installed NPX (version >= 6.13), Node.js (version >= 12.16) and Yarn (version >= 1.21).

Run the following :
```
$ yarn install
$ npx babel-node examples/bigInt.js
```

# Thanks