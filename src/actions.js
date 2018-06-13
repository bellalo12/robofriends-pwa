import {CHANGE_SEARCH_FIELD,
        REQUEST_SEARCH_PENDING,
        REQUEST_SEARCH_SUCCESS,
        REQUEST_SEARCH_FAILED
  } from './constants.js'


export const setSearchField =(text)=>({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const requestRobots = ()=>(dispatch)=>{
  dispatch({type: REQUEST_SEARCH_PENDING});
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res=>res.json())
  .then(data=>dispatch({type: REQUEST_SEARCH_SUCCESS, payload:data}))
  .then(error=>dispatch({type:REQUEST_SEARCH_FAILED, payload:error}))
}
