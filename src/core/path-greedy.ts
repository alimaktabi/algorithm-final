import { Algorithm } from "."

export const PathGreedy = (algorithm: Algorithm) => {
  const visitedNodes: number[] = [0]

  let profit = 0,
    totalCost = 0

  while (
    visitedNodes.length !== algorithm.nodes.length &&
    totalCost < algorithm.tMax
  ) {
    let minimumCost = Infinity,
      selectedNode = -1

    let previousNode = visitedNodes.at(-1)!

    algorithm.distancesMatrix[previousNode].forEach((distance, key) => {
      if (visitedNodes.includes(key) || distance === 0) return

      if (distance < minimumCost && totalCost + distance <= algorithm.tMax) {
        minimumCost = distance
        selectedNode = key
      }
    })

    if (selectedNode === -1) break

    visitedNodes.push(selectedNode)

    totalCost += minimumCost
    profit += algorithm.nodes[selectedNode].score
  }

  return {
    visitedNodes: visitedNodes.slice(1),
    profit,
    nodesVisitedCount: visitedNodes.length - 1,
    totalCost,
  }
}

export default PathGreedy
