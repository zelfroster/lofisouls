import Image from 'next/image'
import { useState } from 'react'
import Control from '../components/Control'

export default function Player({ activeSong }: { activeSong: any }) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div id="music-player" className="p-6 bg-white/10 rounded-lg overflow-y-scroll">
      <div className="flex flex-col justify-center items-center w-full h-full gap-4 rounded-lg">
        <Image width={300} height={300} className="rounded-lg" src={activeSong.images.coverart} alt="" />
        <div className="flex flex-col items-center justify-between p-2">
          <h2 className="text-xl font-bold text-purple-100">
            {activeSong.title.toString().length > 25 ? activeSong.title.toString().substring(0, 25) + "..." : activeSong.title}
          </h2>
          <p className="text-sm font-semibold text-purple-100">
            by {activeSong.subtitle.toString().length > 35 ? activeSong.subtitle.toString().substring(0, 35) + "..." : activeSong.subtitle}
          </p>
        </div>
        <div className="flex items-center justify-between gap-6 mb-4">
          <Control activeSong={activeSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        </div>
      </div>
    </div>
  )
}
