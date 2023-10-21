import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/addWin'}>Add Win</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
