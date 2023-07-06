"use client"

import { useRef, useEffect } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

const ResultPage = ({
  locations,
  res,
}: {
  locations: { x: number; y: number; score: number }[]
  res: any
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const ctx = chartRef.current!.getContext("2d")!

    // // Extract x and y coordinates from the locations data
    // const xCoordinates = locations.map((location) => location.x)
    // const yCoordinates = locations.map((location) => location.y)

    // Create a new chart instance
    new Chart(ctx, {
      type: "scatter", // Use scatter chart type to represent nodes
      data: {
        datasets: [
          {
            label: "Nodes",
            data: locations,
            backgroundColor: (context) => {
              // Use different colors for the first node and other nodes
              if (context.dataIndex === 0) {
                return "red" // Customize the color of the first node
              } else {
                return "yellow" // Customize the color of other nodes
              }
            },
          },
          {
            label: "Lines",
            data: res.map((item: number) => locations[item]),
            type: "line", // Use line chart type to connect nodes

            borderColor: "green", // Customize line color as needed
            fill: false, // Disable filling under the line
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "linear",
            position: "bottom",
          },
          y: {
            type: "linear",
            position: "left",
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const label: any = context.dataset.data[context.dataIndex]

                return `X: ${label.x}, Y: ${
                  label.y
                }, Score: ${label.score.toFixed(2)}`
              },
            },
          },
        },
      },
    })
  }, [])

  return <canvas ref={chartRef} width={400} height={400} />
}

export default ResultPage
