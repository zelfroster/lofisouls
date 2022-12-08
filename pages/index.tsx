import Head from 'next/head'
import Navbar from '../components/Navbar'
import Tracks from '../components/Tracks'

export default function Home({ data }: { data: any }) {
  return (
    <div>
      <Head>
        <title>LofiSouls</title>
        <meta name="description" content="A Project where people can listen to Music" />
      </Head>
      <main className="w-full font-raleway min-h-screen gradient__bg">
        <Navbar />
        <section className="container mx-auto h-max">
          <Tracks hits={data.tracks.hits} />
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

  const res1 = await fetch('https://shazam-core.p.rapidapi.com/v1/search/multi?search_type=SONGS&query=rock', options)
  const data1 = await res1.json()
  const res2 = await fetch('https://shazam-core.p.rapidapi.com/v1/search/multi?search_type=SONGS&query=lofi', options)
  const data2 = await res2.json()
  const res3 = await fetch('https://shazam-core.p.rapidapi.com/v1/search/multi?search_type=SONGS&query=pop', options)
  const data3 = await res3.json()
  let data = { ...data1 }
  data2.tracks.hits.forEach((item: object) => data.tracks.hits.push(item))
  data3.tracks.hits.forEach((item: object) => data.tracks.hits.push(item))

  return {
    props: { data }
  }
}
