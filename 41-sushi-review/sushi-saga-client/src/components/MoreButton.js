import React from 'react'

const MoreButton = (props) => {
  const handleClick = (e) =>{
    props.fourMoreSushi()
  }
    return <button onClick={handleClick}>
            More sushi!
          </button>
}

export default MoreButton