import "../styles/globals.css"
import type { AppProps } from "next/app"
import Header from "../components/Header"
import React from "react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
