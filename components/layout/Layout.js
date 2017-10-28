

const Layout = (props) => (
  <div className="container">
    {props.children}
    <style jsx>{`

    .container {
      width: 60rem;
      padding: 1rem 1rem;
      margin: 2rem auto;
      background-color: #fff;
    }

    `}</style>
  </div>
)


export default Layout;
