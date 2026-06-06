import ReactionBar from "@/components/ReactionBar"
import Link from "next/link"
export default function Feed() {
  return (
    <div className="relative h-screen bg-black">
      <div className="absolute top-4 right-4"><Link href="/upload" className="text-white text-3xl">📷</Link></div>
      <div className="flex h-full items-center justify-center text-white"><p>Video 1 of 1 - TikTok style feed</p></div>
      <ReactionBar />
      <div className="absolute bottom-4 right-4 flex-col gap-4 text-white text-3xl">
        <button>💬</button><button>🔖</button><button>❤️</button><Link href="/cart">🛍️</Link>
      </div>
    </div>
  )
}
