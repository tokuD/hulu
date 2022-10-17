import React from "react"

type Props = {
  title: string
  url: string
}

const NavItem = (props: Props) => {
  return (
    <div className="">
      <h3
        className="cursor-pointer duration-100 hover:scale-125
      hover:text-white active:text-red-500 whitespace-nowrap"
      >
        {props.title}
      </h3>
    </div>
  )
}

export default NavItem
