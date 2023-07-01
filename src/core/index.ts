import { PathNode } from "@/types"
import { mapInputToNodes } from "@/utils/map-input"
import PathGreedy from "./path-greedy"
import ScoreGreedy from "./score-greedy"

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
