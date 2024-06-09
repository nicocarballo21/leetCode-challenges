const EXECUTIONS = 2000000

export function measureExecutionTime (func, param) {
  const times = []

  const mainStart = performance.now()

  for (let i = 0; i < EXECUTIONS; i++) {
    const start = performance.now()
    func(param)
    const end = performance.now()
    times.push(end - start)
  }

  const totalTime = times.reduce((acc, curr) => acc + curr, 0)
  const averageTime = (totalTime / EXECUTIONS).toPrecision(3)

  const mainEnd = performance.now()

  console.log(
    '\x1b[42m',
    `-> The average execution time for ${EXECUTIONS} executions is: ${averageTime} ms\n`,
    `-> Time for ${EXECUTIONS}: ${mainEnd - mainStart} ms\n`
  )
}
