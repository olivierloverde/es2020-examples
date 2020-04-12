const maxInteger = Number.MAX_SAFE_INTEGER;

console.info(maxInteger); // 9007199254740991
console.info(maxInteger + 1); // 9007199254740992
console.info(maxInteger + 2); // 9007199254740992 ??
console.info(maxInteger + 3); // 9007199254740994
console.info(maxInteger + 200); // 9007199254741192 ??
console.info(maxInteger * 200); // 1801439850948198100 ??

// Using BigInt
const maxIntegerBigInt = BigInt(maxInteger);
console.info(maxIntegerBigInt); // 9007199254740991n
console.info(maxIntegerBigInt + 1n); // 9007199254740992n
console.info(maxIntegerBigInt + 2n); // 9007199254740993n 
console.info(maxIntegerBigInt + 3n); // 9007199254740994n 
console.info(maxIntegerBigInt + 200n); // 9007199254741191n
console.info(maxIntegerBigInt * 200n); // 1801439850948198200n

