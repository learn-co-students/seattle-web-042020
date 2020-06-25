import React,{Component, Fragment} from 'react'

 class AuthorsForm extends Component{
     state = {

     }

     handleChange = (e) => {
         this.setState({...this.state,[e.target.name]:e.target.value})
     }

     handleSubmit = (e) => {
         e.preventDefault()
        this.props.addAuthorEvent(this.state)
     }


    render(){
        return(
           <Fragment>
               <h1>Add Event:</h1>
               <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                   <label>Event</label>
                   <input type="text" name="event"></input>

                   <label>Date</label>
                   <input type="date" name="date"></input>

                   <label>Time</label>
                   <input type="time" name="time"></input>

                   <label>Guest</label>
                   <input type="text" name="name"></input>

                   <label>Books</label>
                   <input type="text" name="books"></input>

                   <input type="submit" />
               </form>
           </Fragment>
        )
    }
}

export default AuthorsForm