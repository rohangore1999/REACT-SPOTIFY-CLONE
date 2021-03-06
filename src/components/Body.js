import React from 'react'
import './Body.css'
import Header from './Header'
import SongRow from './SongRow'

// Importing Redux-Context-API
import { useStateValue } from '../StateProvider';

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({spotify}) {
    const [{discover_weekly}] = useStateValue()
    return (
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body_info">
                <img src={discover_weekly?.images[0].url} alt="" />

                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon className="body_shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {/* list of songs */}
                {console.log(discover_weekly)}

                {discover_weekly?.tracks.items.map((item,idx)=>(
                    <SongRow key={idx} track={item.track} />
                ))}

            </div>
        </div>
    ) 
}

export default Body
