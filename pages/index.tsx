import Head from 'next/head'
import Navbar from '../components/Navbar'
import Tracks from '../components/Tracks'
import Player from '../components/Player'

export default function Home({ data, data2 }: { data: any, data2: any }) {
  return (
    <div>
      <Head>
        <title>LofiSouls</title>
        <meta name="description" content="A Project where people can listen to Music" />
      </Head>
      <main className="w-full font-raleway min-h-screen gradient__bg4">
        <Navbar />
        <section id="music-component" className="container mx-auto h-max">
          <article className="flex items-center justify-center gap-16 w-full h-full px-8 text-purple-100">
            <Tracks hits1={data.tracks.hits} hits2={data2.tracks.hits} />
            <Player hits1={data.tracks.hits} hits2={data2.tracks.hits} />
          </article>
        </section>
      </main>
    </div>
  )
}
export async function getStaticProps() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'eb9553bd44msh3108bcbe4963c36p193606jsn5e7972425ad7',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };

  const res = await fetch('https://shazam-core.p.rapidapi.com/v1/search/multi?search_type=SONGS&query=rock', options)
  const data = await res.json()
  const res2 = await fetch('https://shazam-core.p.rapidapi.com/v1/search/multi?search_type=SONGS&query=melody', options)
  const data2 = await res2.json()

  // const songUrl = await data.tracks.hits.forEach((item) => item.track.hub.actions.forEach(song => song.uri))

  return {
    props: { data, data2 }
  }
}
