import React from 'react'
import './Player.css'
import Body from './Body'
import Sidebar from './Sidebar'
import Footer from './Footer'


function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player_body">
                {/* sidebar */}
                <Sidebar />
                
                {/* body */}
                <Body spotify={spotify} />

            </div>
            {/* footer */}
            <Footer />
        </div>
    )
}

export default Player
