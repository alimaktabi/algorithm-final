import { Algorithm } from "."

export const ScoreGreedy = (algorithm: Algorithm) => {
  const visitedNodes: number[] = [0]

  let profit = 0,
    totalCost = 0

  while (
    visitedNodes.length !== algorithm.nodes.length &&
    totalCost < algorithm.tMax
  ) {
    let maximumScore = -Infinity,
      selectedNode = -1,
      distance = 0

    let previousNode = visitedNodes.at(-1)!

    algorithm.nodes.forEach((node, key) => {
      if (visitedNodes.includes(key) || key === previousNode) return

      if (
        node.score > maximumScore &&
        totalCost + algorithm.distancesMatrix[previousNode][key] <=
          algorithm.tMax
      ) {
        maximumScore = node.score
        distance = algorithm.distancesMatrix[previousNode][key]
        selectedNode = key
      }
    })

    if (selectedNode === -1) break

    visitedNodes.push(selectedNode)

    totalCost += distance
    profit += maximumScore
  }

  return {
    visitedNodes: visitedNodes.slice(1),
    profit,
    nodesVisitedCount: visitedNodes.length - 1,
    totalCost,
  }
}

export default ScoreGreedy
