import { NextApiRequest, NextApiResponse } from "next"

export function runMiddleware(
  req: NextApiRequest & { [key: string]: any },
  fn: (...args: any[]) => void
): Promise<any> {
  return new Promise((resolve, reject) => {
    fn(req, null, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}
