import Image from 'next/image'

export default function Tracks({ hits1, hits2 }: { hits1: any, hits2: any }) {
  return (
    <div id="music-component" className="grid grid-cols-2 gap-8 bg-white/10 p-4 rounded-xl h-[80vh] overflow-y-scroll">
      {hits1 && hits1.map((item: any, key: number) => {
        return <div key={key} className="flex justify-between w-full p-2 rounded-lg bg-white/10">
          <Image width={60} height={50} className="rounded-lg" src={item.track.images.coverart} alt="" />
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
      {hits2 && hits2.map((item: any, key: number) => {
        return <div key={key} className="flex justify-between w-full p-2 rounded-lg bg-white/10">
          <Image width={60} height={50} className="rounded-lg" src={item.track.images.coverart} alt="" />
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
  )
}
