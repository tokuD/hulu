import { useRouter } from "next/router"
import React from "react"
import requests from "../utils/requests"

type Props = {
  title: string
  url: string
  query: string
}

const NavItem = (props: Props) => {
  const router = useRouter()
  return (
    <div className="">
      <h3
      onClick={() => router.push(`/?genre=${props.query}`)}
        className="cursor-pointer duration-100 hover:scale-125
      hover:text-white active:text-red-500 whitespace-nowrap"
      >
        {props.title}
      </h3>
    </div>
  )
}

export default NavItem
