import React from "react"
import Link from "next/link"
import Header from "./Header"

const Layout = (props) => (
  <div>
    { props.isAuthenticated ? <Header title={props.title}></Header> : null}
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


export default Layout;
