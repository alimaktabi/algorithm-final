import { PathNode } from "@/types"
import { mapInputToNodes } from "@/utils/map-input"
import PathGreedy from "./path-greedy"
import ScoreGreedy from "./score-greedy"
import MainAlgorithm from "./main"

export class Algorithm {
  distancesMatrix: number[][] = []

  tMax: number = 0

  paths: number = 1

  nodes: PathNode[] = []

  prepare(fileInput: string) {
    const { nodes, paths, tMax } = mapInputToNodes(fileInput)

    this.tMax = tMax
    this.paths = paths
    this.nodes = nodes

    this.fillDistancesMatrix()
  }

  run() {
    const pathGreedyRes = PathGreedy(this)
    const scoreGreedyRes = ScoreGreedy(this)

    const res = MainAlgorithm(
      this,
      this.tMax /
        calculateWeightedAverage(
          pathGreedyRes.nodesVisitedCount,
          scoreGreedyRes.nodesVisitedCount,
          pathGreedyRes.profit,
          scoreGreedyRes.profit
        )
    )

    console.log(res)

    return res
  }

  protected fillDistancesMatrix() {
    this.distancesMatrix = Array.from(new Array(this.nodes.length))

    this.distancesMatrix.forEach((item, index) => {
      this.distancesMatrix[index] = Array.from(new Array(this.nodes.length))
    })

    this.nodes.forEach((item, index) => {
      this.nodes.forEach((diffNode, diffIndex) => {
        this.distancesMatrix[index][diffIndex] = this.calculateEuclideanDiff(
          item,
          diffNode
        )
      })
    })
  }

  protected calculateEuclideanDiff(node1: PathNode, node2: PathNode) {
    return Math.sqrt((node1.x - node2.x) ** 2 + (node1.y - node2.y) ** 2)
  }
}

const calculateWeightedAverage = (
  value1: number,
  value2: number,
  weight1: number,
  weight2: number
): number => {
  const totalWeight = weight1 + weight2
  const weightedValue1 = value1 * weight1
  const weightedValue2 = value2 * weight2

  return (weightedValue1 + weightedValue2) / totalWeight
}
