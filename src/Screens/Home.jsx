import React from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/Home.scss'


class Home extends React.Component {
    
    render() {
        return(
            <div className="home-contain">
            <Navbar />
            <div className="photo-links">
                <h2>Wildlife.</h2>
                <h2>Mountains.</h2>
                <h2>Rivers.</h2>
                <h2>Desert.</h2>
            </div>
            </div>
        )
    }

}
export default Home
