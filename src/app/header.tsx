import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gray-700 flex items-center p-5">
      <span>Orienting Problem Explained</span>
      <Link href="/document" className="ml-4">
        Document
      </Link>
    </header>
  )
}
