import React from "react"
import Thumbnail from "./Thumbnail"

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

const Results = (props: Props) => {
  return (
    <div
      className="px-5 my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
      "
    >
      {props.results.map((result) => (
        <Thumbnail key={result.id} result={result}/>
      ))}
    </div>
  )
}

export default Results
