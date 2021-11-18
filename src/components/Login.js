import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'

function Login() {
    return (
        <div className="login">
            <img
                src="https://wallpapercave.com/wp/wp2201811.jpg"
                alt=""
            />
            {/* using a-tag instead of button because when user click on a tag it will send user to spotify page for authentication */}
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
