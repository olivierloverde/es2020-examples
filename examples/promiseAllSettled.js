const resolvingPromise1000ms = new Promise((resolve, reject) => setTimeout(resolve, 1000));
const rejectingPromise2000ms = new Promise((resolve, reject) => setTimeout(reject, 2000));

const timeCheckpoint = Date.now();
Promise.allSettled([
    resolvingPromise1000ms, 
    rejectingPromise2000ms
]).then(data => {
    const elapsedTimeInMS = Date.now() - timeCheckpoint;
    console.info(`Promise.allSettled resolved after ${elapsedTimeInMS}ms`)
    console.info(data)
});