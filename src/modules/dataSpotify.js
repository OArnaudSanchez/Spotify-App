
//Tienda...
const axios = require('axios');

export default{

    namespaced:true,

    state:{
        
        NewReleases:[],
        DataArtists:[],
        Artist:{},
        TopTracks:[],
        URL: 'https://api.spotify.com/v1',
        TOKEN: 'Bearer BQBXgFjRSKCD4dumUQllhLMsmis1dODE3Y_i-1apUNja85qbTghjkYv-qn5zEJn2ZchwjT-Qa6cHUScR6tw',
        OpcionCargar: false,
        AnyError: false,
    },

    mutations:{
        
        SetNewReleases( state, data ){
            state.NewReleases = data;
        },

        SetSearchArtists( state, data ){
            state.DataArtists = data;
        },

        SetArtist( state, data ){
            state.Artist = data;
        },

        SetArtistTopTracks( state, data ){
            state.TopTracks = data;
        }
    },

    actions:{

        GetNewReleases( {commit,state} ){

            state.OpcionCargar  = true;

            fetch(`${ state.URL }/browse/new-releases`,{ headers:{ 'Authorization': state.TOKEN } })
                .then( response => response.json() )
                .then( data => {
                    
                    commit( 'SetNewReleases', data.albums.items );
                    state.OpcionCargar = false;
                })
                .catch( error => state.AnyError = true)

        },

        GetSearchArtists({commit,state}, payload){

            state.OpcionCargar = true;

            fetch(`${ state.URL }/search?query=${ payload }&type=artist&offset=0&limit=15`,{ headers:{ 'Authorization': state.TOKEN } })
                .then( response => response.json() )
                .then( data => {
                    commit( 'SetSearchArtists', data.artists.items );
                    state.OpcionCargar = false;
                })
                .catch( error => state.AnyError = true )

        },

        GetArtist( { commit, state }, id ){

            state.OpcionCargar = true;

            fetch(`${ state.URL }/artists/${ id }`,{headers:{ 'Authorization': state.TOKEN } })
                .then( response => response.json() )
                .then( data => {
                    console.log(data);
                    commit( 'SetArtist', data );
                    state.OpcionCargar = false;
                })
                .catch( error => state.AnyError = true )

        },

        GetArtistTopTracks( { commit, state }, id ){

            state.OpcionCargar = true;

            fetch(`${ state.URL }/artists/${ id }/top-tracks?country=us`,{ headers:{ 'Authorization': state.TOKEN } })
            .then( response => response.json() )
            .then( data => {

                commit( 'SetArtistTopTracks', data.tracks );
                state.OpcionCargar = false;
            })
            .catch( error => state.AnyError = true )
            
        }
    },
    getters:{},
    modules:{}
}