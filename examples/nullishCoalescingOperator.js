let object = {
    car: {
        speed: 0,
        name: ""
    }
};

console.info(object.car.speed || 90); // 90
console.info(object.car.speed ?? 90); // 0

console.info(null || true); // true
console.info(null ?? true); // true

console.info(undefined || true); // true
console.info(undefined ?? true); // true

console.info(0 || true); // true
console.info(0 ?? true); // 0

console.info("" || true); // true
console.info("" ?? true); // ""

console.info([] || true); // []
console.info([] ?? true); // []

console.info({} || true); // {}
console.info({} ?? true); // {}

console.info(true || "hey"); // true
console.info(true ?? "hey"); // true

console.info(false || true); // true
console.info(false ?? true); // false

