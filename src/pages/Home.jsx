import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <div>
      <div>
        <h1>
            <Link to='/login'>Login</Link>
        </h1>
        <br />
        <h1>
            <Link to='/register'>Register</Link>
        </h1>
        <br />
        <h1>

            {props.name ? `Welcome - ${props.name}` : 'Login Please'}

        </h1>
      </div>
    </div>
  )
}

export default Home
