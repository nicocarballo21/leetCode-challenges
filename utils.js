const EXECUTIONS = 2000000;

export function measureExecutionTime(func, param) {
  let times = [];

  const mainStart = performance.now();

  for (let i = 0; i < EXECUTIONS; i++) {
    let start = performance.now();
    func(param);
    let end = performance.now();
    times.push(end - start);
  }

  let totalTime = times.reduce((acc, curr) => acc + curr, 0);
  let averageTime = (totalTime / EXECUTIONS).toPrecision(3);

  const mainEnd = performance.now();

  console.log(
    "\x1b[42m",
    `-> The average execution time for ${EXECUTIONS} executions is: ${averageTime} ms\n`,
    `-> Time for ${EXECUTIONS}: ${mainEnd - mainStart} ms`
  );
}
