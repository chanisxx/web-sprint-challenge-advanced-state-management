import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../actions';

function SmurfForm(props) {
    const [smurf, setSmurf] = useState({name: '', age: '', height: ''});
    const handleChanges = e => {
        setSmurf({...smurf, [e.target.name]: e.target.value});
    };
    const submitHandler = e => {
        e.preventDefault()
        props.postSmurfs(smurf)
    }

    return(
        <div>
            <form>
                <label htmlFor='name' className='label'>Name:</label>
                <input
                name='name'
                type='text'
                placeholder='Enter Name'
                onChange={handleChanges}
                className='input'
                />

                <label htmlFor='age' className='label'>Age:</label>
                <input
                name='age'
                type='text'
                placeholder='Enter Age'
                onChange={handleChanges}
                className='input'
                />

                <label htmlFor='height' className='label'>Height:</label>
                <input
                name='height'
                type='text'
                placeholder='Enter Height'
                onChange={handleChanges}
                className='input'
                />

                <button className = 'button' onClick={submitHandler}>Create Smurf Profile</button>
            </form>
            
        </div>
    );
};

const mapStateToProps = state => {
    return 
}

export default connect(mapStateToProps, 
    { postSmurfs })(SmurfForm);