import React from 'react'


const MovieSearch = (props) => {

  console.log(props)
  
    return(
        <div >
        <form action="">
        <input type="text" placeholder='Search...' onChange={props.handleChange} value={props.searchInput}
        />
        <button onClick={props.handleClick} >Search</button>
      </form>
        </div>
    )
}

export default MovieSearch