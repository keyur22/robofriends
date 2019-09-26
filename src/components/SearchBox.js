import React from 'react';

const SearchBox = props => {
    return (
        <div className='mb3'>
            <input className='pa2 bg-lightest-blue ba b--green br3' type='text' placeholder='Search robots' onChange={props.search}></input>
        </div>
    );
};

export default SearchBox;