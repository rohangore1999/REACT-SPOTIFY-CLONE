import React from 'react'
import './Player.css'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

// Importing Redux-Context-API
import { useStateValue } from '../StateProvider';

function Sidebar() {
    const [{ playlists }] = useStateValue(); // we use dispatch to store the data    

    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />

            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

            <br />
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr />

            {/* using optional chaining to check if playlists data present or not */}
            {/* it will iterate through playlists and pass its name */}
            {playlists?.items?.map((playlist,idx) => (
                <SidebarOption key={idx} title={playlist.name} />
            ))}

            {/* if there is no playlist then this run */}
            {!playlists.items && (
                <SidebarOption title="No Playlists available" />
            )}

        </div>
    )
}

export default Sidebar
