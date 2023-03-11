import { Link } from 'react-router-dom'

export default function Model() {
  return (
    <>
      <h1>Model</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/model">Model</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
