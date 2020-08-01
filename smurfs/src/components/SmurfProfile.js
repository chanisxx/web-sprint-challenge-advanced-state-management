import React from 'react';
import {useParams,  useRouteMatch} from 'react-router-dom'

function SmurfCard(props) {
    const { smurfID } = useParams();
    const { path, url } = useRouteMatch();
    const smurf = props.smurfs.find(smurf => smurf.id === Number(smurfID));
 return (
   <Route path={`smurf/:smurf`}>
    <div className = 'container'>
    <h1>{smurf.name}</h1>
    <h2>{smurf.age}</h2>
    <h2>{smurf.height}</h2>
    </div>
    </Route>
 )
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        error: state.error,
        smurfs: state.smurfs
    };
};

export default connect(mapStateToProps, {fetchSmurfs})(SmurfCard);