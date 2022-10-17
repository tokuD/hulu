import Image from "next/image"
import React from "react"
import HeaderItem from "./HeaderItem"
import {
  HiBadgeCheck,
  HiCollection,
  HiLightningBolt,
  HiOutlineCollection,
  HiOutlineHome,
  HiOutlineSearch,
  HiOutlineUser,
} from "react-icons/hi"

type Props = {}

const Header = (props: Props) => {
  return (
    <header
      className="flex flex-col items-center justify-center sm:flex-row
    m-5 h-auto"
    >
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem icon={HiOutlineHome} title="HOME" />
        <HeaderItem icon={HiLightningBolt} title="TRENDING" />
        <HeaderItem icon={HiBadgeCheck} title="VERIFIED" />
        <HeaderItem icon={HiOutlineCollection} title="COLLECTIONS" />
        <HeaderItem icon={HiOutlineSearch} title="SEARCH" />
        <HeaderItem icon={HiOutlineUser} title="ACCOUNT" />
      </div>
      <div>
        <Image
          src="https://links.papareact.com/ua6"
          width={200}
          height={100}
          alt="logo"
        />
      </div>
    </header>
  )
}

export default Header
