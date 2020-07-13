import React from 'react';

class Header extends React.Component {
    constructor(){
        super()
        this.state ={
            title:"Davey"
        }
    }
    updateTitle = () => {
        this.state.title === "Davey"?
        this.setState({title:"ZIGGY"}):
        this.setState({title:"Davey"})
    }
    
    render(){
        return(
            <header className="App-header">
                <div onClick={this.updateTitle}>
                    {this.state.title}
                </div>
            </header>
        )
    }
}
export default Header;