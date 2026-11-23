export async function runSequentially(tasks) {
  return tasks.reduce((prevPromise, task) => {
    return prevPromise.then((accumulator) => {
      return Promise.resolve(task()).then((result) => {
        accumulator.push(result);
        return accumulator;
      });
    });
  }, Promise.resolve([]));
}

const tasks1 = [() => Promise.resolve(10), () => 20, () => Promise.resolve(30)];

runSequentially(tasks1).then((result) => {
  console.log(result);
});
