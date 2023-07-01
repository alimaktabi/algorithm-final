"use client"

import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"

export default function Home() {
  const { register, handleSubmit } = useForm()

  const [loading, setLoading] = useState(false)

  const onSubmit = (e: any) => {
    setLoading(true)

    const formData = new FormData()

    formData.append("file", e.file[0])

    axios
      .post<any>("/api/submit", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data)
        // setAlgorithm(data.method)
        // setResult(res.data)
      })
      .finally(() => setLoading(false))
  }

  return (
    <main>
      <div className="container mx-auto">
        <div className="mt-20 bg-slate-800 shadow rounded border border-gray-600 p-5">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} method="POST">
              <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                <div>
                  <label className="block">Input File</label>
                  <input
                    type="file"
                    className="mt-5 bg-slate-600 rounded p-3"
                    required
                    {...register("file")}
                  />
                </div>
              </div>
              <div className="text-right">
                <button
                  disabled={loading}
                  type="submit"
                  className="px-4 py-2 rounded disabled:opacity-60 bg-blue-700"
                >
                  Process
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
