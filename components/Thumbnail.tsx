import Image from "next/image"
import React from "react"
import { HiThumbUp } from "react-icons/hi"
import { forwardRef } from "react"

type Props = {
  result: {
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
  }
}
const BASE_URL = "https://image.tmdb.org/t/p/original/"

const Thumbnail = (props: Props) => {
  const { result } = props
  return (
    <div className="group cursor-pointer p-2 duration-200 sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        alt={result.name}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white duration-200 group-hover:font-bold tracking-wider">
          {result.title || result.original_name}
        </h2>
        <div
          className="flex items-centerspace-x-2 opacity-0
        group-hover:opacity-100 duration-200"
        >
          <p>{result.media_type}</p>
          <p>{result.release_date || result.first_air_date}</p>
          <HiThumbUp className="h-5 mx-2" />
          <p>{result.vote_count}</p>
        </div>
      </div>
    </div>
  )
}

export default Thumbnail
