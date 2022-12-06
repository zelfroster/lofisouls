import Image from 'next/image'
import previousBtn from '../public/previousButton.svg'
import playBtn from '../public/playButton.svg'
import nextBtn from '../public/nextButton.svg'

export default function Player({ data, data2 }: { data: any[], data2: any[] }) {
  // data.tracks.hits.forEach(item => item.track.hub.actions.forEach((songUrl) => console.log(songUrl.uri)))
  return (
    <div className="p-6 bg-white/10 rounded-lg overflow-y-scroll">
      <div className="flex flex-col justify-center items-center w-full h-full gap-4 rounded-lg">
        <Image width={300} height={300} className="rounded-lg" src={data.tracks.hits[0].track.images.coverart} alt="" />
        <div className="flex flex-col items-center justify-between p-2">
          <h2 className="text-xl font-bold text-purple-100">
            {data.tracks.hits[0].track.title.toString().length > 25 ? data.tracks.hits[0].track.title.toString().substring(0, 25) + "..." : data.tracks.hits[0].track.title}
          </h2>
          <p className="text-sm font-semibold text-purple-100">
            by {data.tracks.hits[0].track.subtitle.toString().length > 35 ? data.tracks.hits[0].track.subtitle.toString().substring(0, 35) + "..." : data.tracks.hits[0].track.subtitle}
          </p>
        </div>
        <div className="flex items-center justify-between gap-6 mb-4">
          <Image width={40} height={40} src={previousBtn} alt="play previous button" />
          <Image width={50} height={50} src={playBtn} alt="play button" />
          <Image width={40} height={40} src={nextBtn} alt="play next button" />
        </div>
      </div>
      {
        // data.tracks.hits.forEach(item => item.track.hub.actions.forEach((songUrl) => {
        //   // console.log(songUrl)
        //   // return <audio controls src={songUrl.uri}></audio>
        // }))
        // data.tracks.hits.forEach(item => {
        //   return (
        //     <audio controls src={item.track.hub.actions[1].uri}></audio>
        //   )
        // })
        // data.tracks.hits.forEach(item => console.log(item.track.hub.actions[1].uri))
      }
      {
        // data.tracks.hits.map(item => {
        //   return (
        //     <audio controls src={item.track.hub.actions[1].uri}></audio>
        //   )
        // })
      }
      {
        // data2.tracks.hits.map(item => {
        //   return (
        //     <audio controls src={item.track.hub.actions[1].uri}></audio>
        //   )
        // })
        // <audio controls src={"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/44/e9/00/44e90020-0b8e-a2a8-a10a-f522f2e49907/mzaf_13950408475320535247.plus.aac.ep.m4a"}></audio>
      }
    </div>
  )
}
