import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/Navbar.scss'


class Navbar extends React.Component {

    render() {
        return(
            <div className="nav-contain">
            <div className="header-title">
            <Link to="/"><h1>Donegan Photography</h1></Link>
            </div>
            <ul className="right-nav">
            <Link to="/index"><li className="link">Index</li></Link>
            <Link to="/about"><li className="link">About</li></Link>
            </ul>
            </div>
        )
    }

}
export default Navbar