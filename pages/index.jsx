// import type {
//   GetServerSideProps,
//   GetServerSidePropsContext,
//   NextPage,
// } from "next"
import Head from "next/head"
import Image from "next/image"
import React from "react"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Results from "../components/Results"
import requests from "../utils/requests"

// type Props = {
//   results: {
//     adult: boolean
//     backdrop_path: string
//     first_air_date: string
//     genre_ids: number[]
//     id: number
//     media_type: string
//     name: string
//     origin_country: string[]
//     original_lanbuage: string
//     original_name: string
//     overview: string
//     popularity: number
//     poster_path: string
//     vote_average: number
//     vote_count: number
//     title: string
//     release_date: string
//   }[]
// }


const Home = (props) => {
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

// type Fetch =
//   | "fetchTrending"
//   | "fetchTopRated"
//   | "fetchActionMovies"
//   | "fetchComedyMovies"
//   | "fetchHorrorMovies"
//   | "fetchRomanceMovies"
//   | "fetchMystery"
//   | "fetchSciFi"
//   | "fetchWestern"
//   | "fetchAnimation"
//   | "fetchTV"

export const getServerSideProps = async (context) => {
  const genre = context.query.genre

  if(genre === undefined) return {
    props: {
      results: []
    }
  }
  if(Array.isArray(genre)) return {
    props: {
      results: []
    }
  }
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
