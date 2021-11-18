import React from 'react'
import './SidebarOption.css'

// here we mention Icon's "I" caps because we are passing whole Icon component from Sidebar.js
function SidebarOption({ title, Icon }) {
    return (
        <div className="sidebarOption">
            {/* if Icon present then(&&) load Icon */}
            {Icon && <Icon className="sidebarOption_icon" />}

            {/* if Icon present then load title with <h4>-tag else load with p-tag */}
            {/* p-tag use for different titles which are under playlist and for that we dont imgs */}
            {Icon ? (<h4>{title}</h4>) : (<p>{title}</p>)}
        </div>
    )
}

export default SidebarOption
