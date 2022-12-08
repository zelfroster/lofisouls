// import Image from 'next/image'

function Control({ activeSong }: { activeSong: any }) {

  return (
    <div className="flex items-center">
      <audio src={activeSong.hub.actions[1].uri} controls></audio>
    </div>
  )
}
export default Control
