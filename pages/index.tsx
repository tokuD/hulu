import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next"
import Head from "next/head"
import Image from "next/image"
import { ParsedUrlQuery } from "querystring"
import React from "react"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Results from "../components/Results"
import styles from "../styles/Home.module.css"
import requests from "../utils/requests"

type Props = {
  results: {
    adult: boolean
    backdrop_path: string
    first_air_date: string
    genre_ids: number[]
    id: number
    media_type: string
    name: string
    origin_country: string[]
    original_lanbuage: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
    title: string
    release_date: string
  }[]
}


const Home: NextPage<Props> = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Nav */}
      <NavBar />

      {/* Results */}
      <Results results={props.results} />
    </React.Fragment>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context.query.genre

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json())

  return {
    props: {
      results: request.results,
    },
  }
}
