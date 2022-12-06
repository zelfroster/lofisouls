import Image from 'next/image'
import Link from 'next/link'
import GithubLogo from '../public/githubLogo.svg'

function Navbar() {
  return (
    <nav className="container mx-auto py-6">
      <div className="flex justify-between">
        <Link href={'/'} className="text-3xl font-caveat font-bold text-white">LofiSouls</Link>
        <Link href={'https://github.com/zelfroster/lofisouls'}>
          <Image src={GithubLogo} alt="github" />
        </Link>
      </div>
    </nav>
  )
}
export default Navbar
