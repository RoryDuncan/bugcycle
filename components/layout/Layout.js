import React from "react"
import Link from "next/link"
import Sidebar from "./Sidebar"

export const Layout = (props) => (
  <div>
    <Sidebar title={props.title} />
    <div className="container">
      <content>{props.children}</content>
    </div>
    <style jsx>{`

      content {
        display: block;
        padding-top: 6rem;
      }

    `}</style>
  </div>
)

export default Layout