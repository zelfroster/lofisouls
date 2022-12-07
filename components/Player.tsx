import Image from 'next/image'
import previousBtn from '../public/previousButton.svg'
import playBtn from '../public/playButton.svg'
import nextBtn from '../public/nextButton.svg'

export default function Player({ hits1, hits2 }: { hits1: any, hits2: any }) {
  return (
    <div className="p-6 bg-white/10 rounded-lg overflow-y-scroll">
      <div className="flex flex-col justify-center items-center w-full h-full gap-4 rounded-lg">
        <Image width={300} height={300} className="rounded-lg" src={hits1[0].track.images.coverart} alt="" />
        <div className="flex flex-col items-center justify-between p-2">
          <h2 className="text-xl font-bold text-purple-100">
            {hits1[0].track.title.toString().length > 25 ? hits1[0].track.title.toString().substring(0, 25) + "..." : hits1[0].track.title}
          </h2>
          <p className="text-sm font-semibold text-purple-100">
            by {hits1[0].track.subtitle.toString().length > 35 ? hits1[0].track.subtitle.toString().substring(0, 35) + "..." : hits1[0].track.subtitle}
          </p>
        </div>
        <div className="flex items-center justify-between gap-6 mb-4">
          <Image width={40} height={40} src={previousBtn} alt="play previous button" />
          <Image width={50} height={50} src={playBtn} alt="play button" />
          <Image width={40} height={40} src={nextBtn} alt="play next button" />
        </div>
      </div>
      {
        // hits1.map(item => {
        //   return (
        //     <audio controls src={item.track.hub.actions[1].uri}></audio>
        //   )
        // })
      }
      {
        // hits2.map(item => {
        //   return (
        //     <audio controls src={item.track.hub.actions[1].uri}></audio>
        //   )
        // })
      }
    </div>
  )
}
