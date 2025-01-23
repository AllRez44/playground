import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link className="p-4 bg-gray-800 hover:bg-opacity-80 transition-colors text-white rounded" href="/forms/super-hero">Super-Hero</Link>
    </div>
  )
}