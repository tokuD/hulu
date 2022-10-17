import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header/>

      {/* Nav */}
      <NavBar/>

      {/* Results */}
    </React.Fragment>
  )
}

export default Home
