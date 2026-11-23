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
