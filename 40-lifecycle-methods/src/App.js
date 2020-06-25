import React, {Component} from 'react';
import Authors from './Authors.js'
import './styles/main.scss'
let url = `http://localhost:3000/authorsArr`

class App extends Component {

state = {
  authorsArr:[],
  searchTerm:''
}

getTicket = (e,key) => {
  let arr = this.state.authorsArr
  arr[key].tickets =  arr[key].tickets -1
  this.setState({authorsArr:arr})

}

addAuthorEvent = (authorEvent) => {
  authorEvent.books = [authorEvent.books]
  authorEvent.tickets = 50
  
  this.setState({authorsArr:[...this.state.authorsArr, {...authorEvent}]})

}

updateSearchTerm = (term) => {
  this.setState({searchTerm:term})
}

returnSearchedAuthors = () => {
  let filteredAuthor = this.state.authorsArr.filter(authorEvent => {
    return authorEvent.name.includes(this.state.searchTerm)
  })
  return filteredAuthor

}

componentDidMount = () => {
  fetch(url)
  .then(res => res.json())
  .then(data => {
    this.setState({authorsArr:data})
  })
}


  render(){
 
    return (
      <div >
        <Authors authorsArr={this.returnSearchedAuthors()} getTicket={this.getTicket} addAuthorEvent={this.addAuthorEvent} searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm}/>
      </div>
    );
  }
}

export default App;
