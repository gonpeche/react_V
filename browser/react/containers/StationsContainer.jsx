import React, { Component } from 'react'
import Stations from '../components/Stations'
import { connect } from 'react-redux'


const convertSongsToStations = function (songsArray) {
    const stations = {};
    songsArray.forEach(song => {
      const genre = song.genre;
      stations[genre] = stations[genre] || [];
      stations[genre].push(song);
    });
    return stations;
};

const mapStateToProps = function (state, ownProps) { // conecta nuestro STATE con las PROPS

    return {
        stations: convertSongsToStations(state.songs)
    };
};
const mapDispatchToProps = function (dispatch, ownProps) { //conecta el DISPATCH a las PROPS
    return {};
}

const StationsContainer = connect( // Conecta AMBAS 
    mapStateToProps,
    mapDispatchToProps
)(Stations); // Lo que "RENDERIZA"

export default StationsContainer;