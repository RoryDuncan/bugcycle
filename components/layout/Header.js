import React from "react"
import Link from "next/link"
import {theme} from "../../design/theme"

const Header = (props) => (
  <header>
    <div className="navigator">
      <div className="title">{props.title}</div>
      <ul>
        <li>
          <Link href="/">
            <a>List</a>
          </Link>
        </li>
      </ul>
    </div>
    <style jsx>{`

    .title {
      text-align: center;
    }

    header {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      padding: 1rem 1rem;
      background-color: ${theme.navigator.background};
      color: ${theme.navigator.color};
      width: 18rem;

    }

    .navigator {
      display: flex;
      flex-direction: column;
      align-content: space-between;
      justify-content: space-between;
    }

    ul {
      padding: 0 0;
      margin: 1rem 0;
      list-style: none;

    }

    `}</style>
  </header>
)


export default Header;
