import Image from 'next/image'
import { useState } from 'react'
import Player from '../components/Player'
import playBtn from '../public/playButton.svg'

export default function Tracks({ hits }: { hits: any }) {
  const [activeSong, setActiveSong] = useState(hits[0].track)
  return (
    <article className="flex items-center justify-center gap-16 w-full h-full px-8 text-purple-100">
      <div id="music-component" className="grid grid-cols-2 gap-8 bg-white/10 p-4 rounded-xl h-[80vh] overflow-y-scroll">
        {hits && hits.map((item: any, key: number) => {
          return <div key={key} className="flex justify-between w-full p-2 rounded-lg bg-white/10 hover:shadow-lg hover:shadow-gray-800/20 duration-300">
            <div className="group relative flex items-center justify-center gap-4">
              <Image width={60} height={60} className="rounded-lg" src={item.track.images.coverart} alt="" />
              <div className="hidden w-[60px] h-[60px] group-hover:grid place-items-center group-hover:bg-black/40 rounded-lg absolute cursor-pointer duration-300" onClick={() => setActiveSong(item.track)}>
                <Image width={25} height={25} src={playBtn} alt="play button" />
              </div>
            </div>
            <div className="flex flex-col items-end justify-between p-2">
              <h2 className="text-md text-purple-100">
                {item.track.title.toString().length > 25 ? item.track.title.toString().substring(0, 25) + "..." : item.track.title}
              </h2>
              <p className="text-xs font-semibold text-purple-100">
                by {item.track.subtitle.toString().length > 35 ? item.track.subtitle.toString().substring(0, 35) + "..." : item.track.subtitle}
              </p>
            </div>
          </div>
        })}
      </div>
      <Player activeSong={activeSong} />
    </article>
  )
}
