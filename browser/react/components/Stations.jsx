import React from 'react'
import { Link } from 'react-router-dom'
import Station from '../components/Station'
import { Route, Redirect, Switch, match, path, url } from 'react-router-dom';


export default (props) => {
    console.log('PROPS ',props)
    const stations = props.stations;
    return (
      <div>
        <h3>Stations</h3>
        <div className="list-group">
        {
          Object.keys(stations).map(genre => {
            return (
              <div className="list-group-item" key={genre}>
                <Link to={`/stations/${genre}/`}>{genre}</Link>
              </div>
            );
          })
        }
        </div>
      </div>
    );
  }

//   <div>
//   <h3>{ artist.name }</h3>
//   <ul className="nav nav-tabs">
//     <li><Link to={`${url}/albums`}>ALBUMS</Link></li>
//     <li><Link to={`${url}/songs`}>SONGS</Link></li>
//   </ul>
//   <Route path={`${path}/albums`} render={() => <Albums albums={artist.albums} /> }/>
//   <Route path={`${path}/songs`} render={() => <Songs songs={artist.songs} start={start} currentSong={currentSong} />} />
// </div>
{
    // <Link to={`/stations/${genre}/songs`}>{genre}</Link>

}

