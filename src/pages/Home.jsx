import image from '../images/compressed.jpg'
import { Link } from 'react-router-dom'

export default function Home() {

  return (
    <>
      <h1>Home</h1>
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
      <img src={image} alt="" />
    </>
  )
}
