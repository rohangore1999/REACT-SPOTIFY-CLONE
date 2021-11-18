import React from 'react'
import './SongRow.css'

function SongRow({ track }) {
    return (
        <div className="songRow">
            <img className="songRow_album" src={track.album.images[0].url} alt="" />
            <div className="songRow_info">
                <h1>{track?.name}</h1>
                <p>
                    {/* (artist.name)).join(", ") =>> means if there are two artists who sing song then it will join them by ", " >>> eg: Ariana Grande, Justin Bieber - Stuck with U */}
                    {track.artists.map((artist)=>(artist.name)).join(", ")} - {" "} {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow
