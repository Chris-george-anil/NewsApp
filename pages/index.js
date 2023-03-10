import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import SearchBar from '../src/search/search'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>News Web</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:ital,wght@1,500&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.body}>
        <div className={styles.main}>
          <div className={styles.title}> <h1>News App</h1>
            <h3>Your Most Relaible News Spot</h3>  </div>

          <Image alt='logo' src={'/images/newspaper.png'} width={300} height={300} />

        </div>

      </main>
      {/* <hr></hr> */}
      <SearchBar />
    </>
  )
}
