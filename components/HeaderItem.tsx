import React from "react"
import { IconType } from "react-icons"

type Props = {
  icon: IconType
  title: string
}

const HeaderItem = (props: Props) => {
  return (
    <div
      className="flex justify-center items-center group
      hover:text-white cursor-pointer flex-col w-12 sm:w-20"
    >
      <props.icon className="h-8 w-8 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 duration-200 tracking-widest">
        {props.title}
      </p>
    </div>
  )
}

export default HeaderItem
