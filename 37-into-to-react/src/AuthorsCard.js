import React from 'react'

class AuthorsCard extends React.Component{

  
    render(){
        console.log(this.props)
        return(
            <div>
            <h1>{this.props.author.name}</h1>
            <h2>{this.props.author.genera}</h2>
            </div>
        )
    }

}

export default AuthorsCard