import { PathNode } from "@/types"

const spaceRegex = /(?:[[:space:]][[:space:]]+|\t)/

export const mapInputToNodes = (inputString: string) => {
  const lines = inputString.split("\n")

  const [tMax, paths] = lines[0].split(spaceRegex).map(Number)

  const nodes: PathNode[] = []

  for (const line of lines.slice(1)) {
    const props = line.split(spaceRegex).map(Number)

    if (props.length < 3) continue

    nodes.push({
      score: props[2],
      x: props[0],
      y: props[1],
    })
  }

  return {
    tMax,
    paths,
    nodes,
  }
}
