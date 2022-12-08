import Image from 'next/image'
import previousBtn from '../public/previousButton.svg'
import playBtn from '../public/playButton.svg'
import nextBtn from '../public/nextButton.svg'

function Control({ activeSong, isPlaying, setIsPlaying }: { activeSong: any, isPlaying: boolean, setIsPlaying: any }) {
  function playPause() {
    setIsPlaying(!isPlaying)
    if (isPlaying) {
      activeSong
    }
  }
  return (
    <div className="flex items-center gap-6">
      <audio controls src={activeSong.hub.actions[1].uri} ></audio>
      {/* <Image width={40} height={40} src={previousBtn} alt="play previous button" /> */}
      {/* <Image width={50} height={50} src={playBtn} alt="play button" onClick={playPause} /> */}
      {/* <Image width={40} height={40} src={nextBtn} alt="play next button" /> */}
    </div>
  )
}
export default Control
