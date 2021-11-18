export const initialState = {
    user: null,
    // remove after debugging
    // default token so that to get rid of login everytime
    // token:"BQBTDedv0vpDNqvrCClB5DBAnT2Svw9ZDjcniTNearNS3kycYqMTz4Kb3xswPM-dkQEh4ejFuGlze-mecj0r577nVburEcPkdU6NsCeQWjL9m81SPBd5ZW9tt5N7Q0EfwByFfxUM9unzqYY8OZhJ40Xd9KR_osAt8t7LhMMAhBYafc6P",
    token:null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly:null
};

// export const actionTypes = {
//     SET_SEARCH_TERM: "SET_SEARCH_TERM",
// };

const reducer = (state, action) => {
    console.log(action);

    //Action -> type, [payload] (payload is variable)

    switch (action.type) {
        // while storing data using dispatch
        // type: 'SET_USER', user: <data_which_want_to_store>
        // with the help of case 'SET_USER' we will store the data in user 
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        
        // SET_TOKEN
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        
        
        // SET_PLAYLISTS
        case "SET_PLAYLIST":
            return {
                ...state,
                playlists: action.playlists
            }
        
        // SET_DISCOVER_WEEKLY
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
            
        
        // if nothing happens then return state
        default:
            return state;
    }
};

export default reducer