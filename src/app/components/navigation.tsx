import Link from 'next/link'
import Image from 'next/image'

import Logo from '@/assets/podcast.png'

const Navigation = () => {
    return (
        <nav className="uppercase flex gap-8 items-center justify-between border-b-zinc-50/50 border-b-2 pb-2 m-4 text-xl">
            <Link href="/" className="flex gap-4 items-center">
                <Image src={Logo} alt="Logo" width={48} height={48} />
                Your Logo
            </Link>
            <div className="flex gap-8">
                <Link href="/">Home</Link>
                <Link href="/users">Users</Link>
                <Link href="/add">Add</Link>
            </div>
        </nav>
    )
}

export default Navigation
