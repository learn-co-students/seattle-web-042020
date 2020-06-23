import React from 'react'
import AuthorsCard from './AuthorsCard.js'


const Authors = (props) => {
   console.log('author props', props)

    return( 
        <div>
            {
                props.authorsArr.map(cat => <AuthorsCard author={cat}  /> )
            }
       
     </div>
    )
}

export default Authors