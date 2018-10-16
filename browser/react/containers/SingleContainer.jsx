import React, { Component } from 'react'
import Station from '../components/Station'
import { connect } from 'react-redux'

import { start } from '../action-creators/player';


const mapStateToProps = function (state, ownProps) { // conecta nuestro STATE con las PROPS

    return {
        genreName: ownProps.match.params.genreName,
        songs: state.songs
        .filter(song => song.genre === ownProps.match.params.genreName),
        currentSong: state.player.currentSong
    };
};
const mapDispatchToProps = function (dispatch, ownProps) { //conecta el DISPATCH a las PROPS
    return {
        start: function (song, list) {
            dispatch(start(song, list));
     }   

    }
}

const StationContainer = connect( // Conecta AMBAS 
    mapStateToProps,
    mapDispatchToProps
)(Station); // Lo que "RENDERIZA"

export default StationContainer;
