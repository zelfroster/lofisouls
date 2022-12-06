import Image from 'next/image'

export default function Tracks({ data, data2 }: { data: any[], data2: any[] }) {
  data.tracks.hits.forEach((item) => console.log(item))
  // data.tracks.hits.forEach((item) => item.track.hub.actions.forEach(song => console.log(song.uri)))
  // data.tracks.hits.forEach(item => item.track.hub.actions.forEach(song => console.log(song.uri)))
  return (
    <div id="music-component" className="grid grid-cols-2 gap-8 bg-white/10 p-4 rounded-xl h-[80vh] overflow-y-scroll">
      {data && data.tracks.hits.map((item, key) => {
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
      {data2 && data2.tracks.hits.map((item, key) => {
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
