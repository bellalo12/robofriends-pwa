import React from 'react';


const Card =({name, id, email})=>{
  return(
    <div className='bg-light-green br3 shadow-5 dib grow tc pa3 ma2'>
    <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
    <div>
    <h2>{name}</h2>
    <p>{email}</p>
    </div>
    </div>
  );
}


export default Card;
