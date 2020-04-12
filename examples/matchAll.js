const re = /(Mister )\w+/g;
const str = 'Mister Smith with Mister Galladon';
const matches = str.matchAll(re);

console.info(matches); // Object [RegExp String Iterator] {}
console.info(Array.from(matches));
/*
[
  [
    'Mister Smith',
    'Mister ',
    index: 0,
    input: 'Mister Smith with Mister Galladon',
    groups: undefined
  ],
  [
    'Mister Galladon',
    'Mister ',
    index: 18,
    input: 'Mister Smith with Mister Galladon',
    groups: undefined
  ]
]
*/