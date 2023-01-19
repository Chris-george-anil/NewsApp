import Image from 'next/image';
import Link from 'next/link';

export const Navibar = () => {
    return (
        <header>
            <div>
                <div className='navcontent'>
                    <Link href={"/"} passHref>  <Image src={'/images/newspaper.png'} height={50} width={50}></Image>
                    </Link>

                    <nav>
                        <ul>
                            <li> <Link href='/'>Home</Link> </li>
                            <li><Link href='/#search'>Search</Link></li>
                            <li><Link href='/content/trending'>Trending</Link></li>
                        </ul>


                    </nav></div>
            </div>
        </header>
    )
}