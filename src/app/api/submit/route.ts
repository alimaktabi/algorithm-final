import { Algorithm } from "@/core"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: NextRequest) => {
  const data = await req.formData()

  const file: File | null = data.get("file") as unknown as File

  if (!file) {
    return NextResponse.json({ success: false })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const content = buffer.toString()

  const start = performance.now()
  const algorithm = new Algorithm()

  algorithm.prepare(content)

  const res = algorithm.run()

  return NextResponse.json({
    status: "Ok",
    res,
    nodes: algorithm.nodes,
    timeTaken: performance.now() - start,
  })
}
