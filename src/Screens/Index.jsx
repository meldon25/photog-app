import React from 'react'
import Navbar from '../Components/Navbar'
import Tabs from '../Components/Tabs'

import '../Styles/Index.scss'


class Index extends React.Component {

    render() {
        return (
            <>
                <Navbar />
                <Tabs>
                    <div className="all-tab" label="All">
                        <img className="all-photos" src="../Images/Shoebill.jpg" />
                        <img className="all-photos" src="../Images/DSCN1212_2.JPG" />
                        <img className="all-photos" src="../Images/DSCN0358.JPG" />
                        <img className="all-photos" src="../Images/DSCN1127.JPG" />
                        <img className="all-photos" src="../Images/DSCN1558.JPG" />
                        <img className="all-photos" src="../Images/IMG_0002.JPG" />
                        <img className="all-photos" src="../Images/IMG_0010 2.JPG" />
                        <img className="all-photos" src="../Images/IMG_0040.JPG" />
                        <img className="all-photos" src="../Images/IMG_0075.JPG" />
                        <img className="all-photos" src="../Images/IMG_0179 copy.JPG" />
                        <img className="all-photos" src="../Images/IMG_0394.JPG" />
                        <img className="all-photos" src="../Images/IMG_0523.JPG" />
                        <img className="all-photos" src="../Images/IMG_0955.JPG" />
                        <img className="all-photos" src="../Images/IMG_0988_2.JPG" />
                        <img className="all-photos" src="../Images/IMG_1047.JPG" />
                        <img className="all-photos" src="../Images/IMG_1206.JPG" />
                        <img className="all-photos" src="../Images/IMG_1259_2.JPG" />
                        <img className="all-photos" src="../Images/IMG_1286.JPG" />
                        <img className="all-photos" src="../Images/IMG_1388.JPG" />
                        <img className="all-photos" src="../Images/Ranch Shed copy.jpg" />
                    </div>
                    <div className="bw-tab" label="Black & White">
                        <img className="bw-photos" src="../Images/DSCN1212_2.JPG" />
                        <img className="bw-photos" src="../Images/IMG_0010 2.JPG" />
                        <img className="bw-photos" src="../Images/IMG_0040.JPG" />
                        <img className="bw-photos" src="../Images/IMG_0075.JPG" />
                        <img className="bw-photos" src="../Images/IMG_0179 copy.JPG" />
                        <img className="bw-photos" src="../Images/IMG_1388.JPG" />
                        <img className="bw-photos" src="../Images/Ranch Shed copy.jpg" />
                    </div>
                    <div className="color-tab" label="Color">
                        <p>Hello this is COLOR</p>
                        <img className="color-photos" src="../Images/Shoebill.jpg" />
                        <img className="color-photos" src="../Images/DSCN0358.JPG" />
                        <img className="color-photos" src="../Images/DSCN1127.JPG" />
                        <img className="color-photos" src="../Images/DSCN1558.JPG" />
                        <img className="color-photos" src="../Images/IMG_0002.JPG" />
                        <img className="color-photos" src="../Images/IMG_0394.JPG" />
                        <img className="color-photos" src="../Images/IMG_0523.JPG" />
                        <img className="color-photos" src="../Images/IMG_0955.JPG" />
                        <img className="color-photos" src="../Images/IMG_0988_2.JPG" />
                        <img className="color-photos" src="../Images/IMG_1047.JPG" />
                        <img className="color-photos" src="../Images/IMG_1206.JPG" />
                    </div>
                </Tabs>
            </>
        )
    }
}

export default Index