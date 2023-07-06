import { Algorithm } from "."

export const compareWithPreviousNode = (
  sourceIndex: number,
  node1Index: number,
  node2Index: number,
  algorithm: Algorithm
) => {
  return (
    algorithm.distancesMatrix[sourceIndex][node1Index] <
    algorithm.distancesMatrix[sourceIndex][node2Index]
  )
}

const MainAlgorithm = (algorithm: Algorithm, r: number) => {
  const visitedNodes = [0]

  let totalCost = 0,
    profit = 0

  while (
    totalCost < algorithm.tMax &&
    visitedNodes.length < algorithm.nodes.length
  ) {
    const previousNode = visitedNodes.at(-1)!

    let maximumScore = -Infinity,
      selectedNode = -1,
      distance = -1

    algorithm.nodes.forEach((node, index) => {
      if (visitedNodes.includes(index) || index === previousNode) return
      if (algorithm.distancesMatrix[index][previousNode] > r) return

      if (
        maximumScore < node.score &&
        totalCost + algorithm.distancesMatrix[index][previousNode] <=
          algorithm.tMax
      ) {
        maximumScore = node.score
        distance = algorithm.distancesMatrix[previousNode][index]
        selectedNode = index
      }
    })

    if (selectedNode === -1) break

    visitedNodes.push(selectedNode)

    totalCost += distance
    profit += maximumScore
  }

  return {
    visitedNodes: visitedNodes,
    profit,
    nodesVisitedCount: visitedNodes.length - 1,
    totalCost,
  }
}

export default MainAlgorithm

//todo:
//  PATH GREEDY CHOICE WHEN EQUAL PATHS
//  VISUALIZES
