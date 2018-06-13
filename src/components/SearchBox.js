import React from 'react';

const SearchBox=({searchfield, onSearchChange})=>{
  return(
    <div>
    <input
    onChange={onSearchChange}
    className='pa3 ba b--yellow bg-light-blue br3 shadow-5 ma2' 
    type='search'
    placeholder='search robot' />
    </div>
  );
}


export default SearchBox;
