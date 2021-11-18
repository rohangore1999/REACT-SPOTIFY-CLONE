// Spotify will take take care of authentication and after that it will redirect to our app again
// when click on logged in
// export so than we can use this variable
export const authEndpoint = "https://accounts.spotify.com/authorize"

// after authentication, redirect to below
const redirectUri = "https://spotify-clone-4a547.web.app/"

const clientId = "63a0a6cb9ef24534a72f00186a1d1d5f"

// scopes:
// it will give user below roles: eg modify the current playing song etc
// note: here we are not giving role to remove/delete playlist

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// now we need to strip the access token from below url which spotify give us after loggedin

// http://localhost:3000/#access_token=BQCNTz_kVDbYuGVgj9m_sc3RB8phLWJInIUJtwOVv0-u7J6om8etumEP7GmGAg8yi9_GjQ_kEN20Rg6IZ779OYLUE7UeR7mvlyk3FNZwIsgd7AeeLwONwhKjF1k5VSexRgI-pG9-_3A8mLNV0l5XdrF_hO3JlEN1xap0lrWNnY1AMPFC&token_type=Bearer&expires_in=3600


export const getTokenFromUrl = () => {
    return window.location.hash // In url it will go to seach for hash in location [eg. access_token=BQCNTz_kVDbYuGVgj9m_sc3RB8phLWJInIUJtwOVv0-u7J6om8etumEP7GmGAg8yi9_GjQ_kEN20Rg6IZ779OYLUE7UeR7mvlyk3FNZwIsgd7AeeLwONwhKjF1k5VSexRgI-pG9-_3A8mLNV0l5XdrF_hO3JlEN1xap0lrWNnY1AMPFC&token_type=Bearer&expires_in=3600]
    .substring(1) //it says get the first substring [eg. access_token=BQCNTz_kVDbYuGVgj9m_sc3RB8phLWJInIUJtwOVv0-u7J6om8etumEP7GmGAg8yi9_GjQ_kEN20Rg6IZ779OYLUE7UeR7mvlyk3FNZwIsgd7AeeLwONwhKjF1k5VSexRgI-pG9-_3A8mLNV0l5XdrF_hO3JlEN1xap0lrWNnY1AMPFC&token_type=Bearer&expires_in=3600]
    .split('&') // access_token=BQCNTz_kVDbYuGVgj9m_sc3RB8phLWJInIUJtwOVv0-u7J6om8etumEP7GmGAg8yi9_GjQ_kEN20Rg6IZ779OYLUE7UeR7mvlyk3FNZwIsgd7AeeLwONwhKjF1k5VSexRgI-pG9-_3A8mLNV0l5XdrF_hO3JlEN1xap0lrWNnY1AMPFC
    .reduce((initial, item) => { //initial-> initial value, item- each item show when it will loop
        let parts = item.split('=') // split on '=' [eg: 'access_token','BQCNTz_kVDbYuGVgj9m_sc3RB8phLWJInIUJtwOVv0-u7J6om8etumEP7GmGAg8yi9_GjQ_kEN20Rg6IZ779OYLUE7UeR7mvlyk3FNZwIsgd7AeeLwONwhKjF1k5VSexRgI-pG9-_3A8mLNV0l5XdrF_hO3JlEN1xap0lrWNnY1AMPFC']
        
        // so in parts[0] we have access token, and parts[1] we have string
        initial[parts[0]] = decodeURIComponent(parts[1]) 

        return initial

    }, {}); //empty object {} specify that what will be the initial start with

}



// export so than we can use this variable
// scopes.join("%20") => because it will join all the item from the list and join based on "space" -> use ascii code "%20"
// &response_type=token => means it will send token(unique) as a response
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dailog=true`;