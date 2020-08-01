import React, { useEffect } from 'react';
import SmurfCard from './SmurfCard';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions'

const SmurfList = props => {
    useEffect(()=>{
        props.fetchSmurfs()
    }, [])
    return (
        <div className='flex'>
        {props.isFetching ? <p>...LOADING...</p>: 
        props.error.length ? <p>ERROR: {props.error}</p> :
        props.smurfs.map(smurf => <SmurfCard key={smurf.id} smurf={smurf}/>)
        }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        error: state.error,
        smurfs: state.smurfs
    };
};

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);