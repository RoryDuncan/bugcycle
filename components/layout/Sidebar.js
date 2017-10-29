import React from "react"
import Link from "next/link"
import {theme, colors} from "../../design/theme"
import {auth} from "../Auth"

export default class Sidebar extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      auth: auth.state,
    }
    this.onChange = this.onChange.bind(this)
  }

  onComponentWillMount() {
    auth.on("change", this.onChange)
  }

  onChange() {
    console.log("change occurred..")
  }


  render(props) {

    if (!this.state.auth.signedIn) return null;

    return (
      <aside>
        <div className="sidebar">
          <section>
            <h1 className="title">{this.props.title}</h1>
          </section>

          <section>
            <ul className="project-list">
              <li>
                <Link href="/">
                  <a>List</a>
                </Link>
              </li>
            </ul>
          </section>

          <section className="auth-details">
            <span>Signed in as {this.state.auth.user.displayName}</span>
            <a>Sign Off</a>
          </section>


        </div>
        <style jsx>{`

        .title {
          text-align: center;
          font-size: 1.6rem;
          color: ${theme.sidebar.color}
        }

        aside {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          padding: 1rem 0rem;
          background-color: ${theme.sidebar.background};
          color: ${theme.sidebar.color};
          border-right: 1px solid rgba(0,0,0,0.1);
          width: 18rem;

        }

        .sidebar {
          display: flex;
          flex-direction: column;
          align-content: space-between;
          justify-content: space-between;
        }

        ul {
          padding: 0rem 0;
          margin: 0rem 0;
          list-style: none;
        }

        .project-list {
          margin: -1rem -1rem;
          height: 75vh;
          background-color: ${theme.sidebar.item.background};
        }

        .project-list a {
          display: block;
          padding: 0.5rem 2rem;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          color: ${theme.sidebar.item.color};
        }

        .project-list a:hover {
          background-color: #fcfcfe;
        }

        section {
          border-bottom: 1px solid rgba(0,0,0,0.1);
          padding: 1rem 1rem;
        }

        .auth-details {
          top: 90vh;
          color: ${colors.shale};
          font-size: 0.7rem;
          display: flex;
          justify-content: space-between;
        }

        .auth-details a {
          color: ${colors.turquoise};
        }

        `}</style>
      </aside>
    )
  }
}