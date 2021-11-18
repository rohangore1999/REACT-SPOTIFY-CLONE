import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Player from './components/Player';
import { getTokenFromUrl } from './components/spotify';

// help us to interact with our react app and spotify app
import SpotifyWebApi from 'spotify-web-api-js';

// Importing Redux-Context-API
import { useStateValue } from './StateProvider';

// it will create instance of spotify; allow us to communicate with spotify
const spotify = new SpotifyWebApi();

function App() {

  // to store/get value from data layer
  const [{ user, token }, dispatch] = useStateValue(); // we use dispatch to store the data
  // whatever mention in {} that we can access

  // we use useEffect to get the token because it will execute one time only when the app compoenent get loaded
  // and also we want to get token only one time
  // run code based on given condition
  useEffect(() => {
    const hash = getTokenFromUrl()
    const _token = hash.access_token
    // after getting token we dont want our access token to show in url
    window.location.hash = ""

    if (_token) {

      // if token is available then store it to token variable
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })

      // with the help of token key it will connect to our spotify acc
      spotify.setAccessToken(_token)

      // spotify.getMe() return response to handle that we need to use "then"
      spotify.getMe().then((user) => {
        // console.log("USER =>>>", user)

        // to store that user data in datalayer
        dispatch({
          type: 'SET_USER',
          user: user
        })

      })


      // to get playlist once only after app loaded and stored it in datalayer
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists
        })
      })

      // using Spotify library passing my playlist id
      // then getting response of my playlist and storing with the help of "SET_DISCOVER_WEEKLY"
      spotify.getPlaylist('3idZjz51OjIu4gvU4uORmR').then((discover_weekly) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: discover_weekly
        })
      })

    }

  }, []) // [] => run onces when app component load

  console.log("USER from DATALAYER =>>>", user)
  console.log("TOKEN from DATALAYER =>>>", token)

  return (
    <div className="app">
      {/* ** FLOW ** */}
      {/* Spotify logo */}
      {/* Spotify login button */}

      {
        // if we have token then load Player component else load login component
        token ? (
          <Player spotify={spotify} />
        ) :
          <Login />
      }

    </div>
  );
}

export default App;
