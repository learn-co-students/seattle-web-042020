import React, {Component} from 'react';
import Authors from './Authors.js'
import './styles/main.scss'


class App extends Component {

// constructor(props){
//   super(props);
//   this.state = {  authorsArr: [
//     {name: 'N.K. Jemisin', genera: 'fiction', books:['Inheritance Trilogy','Broken Earth series', 'Great Cities Series' ], event:'Signing', date:'7/13/22', time:'10:00am', tickets:50}, 
//     {name: 'Cathy O neal', genera: 'non-fiction', books:['Weapons of Math Destruction'], event:'Reading', date:'7/10/22', time:'3:00pm', tickets:50}, 
//     {name: 'Arkady Martine', genera: 'scifi', books:['A Memory Called Empire'], event:'Signing', date:'7/11/22', time:'5:00pm', tickets:50},
//     {name: 'Ann Leckie', genera: 'sci-fi, fantasy', books:['Ancillary Justice', 'Ancillary Sword', 'Ancillary Mercy', 'The Raven Tower'], event:'Reading', date:'7/21/22', time: '11:00am', tickets:50}
//     ]}

//     this.getTicket = this.getTicket.bind(this)
// }

state = {
  authorsArr: [
    {name: 'N.K. Jemisin', genera: 'fiction', books:['Inheritance Trilogy','Broken Earth series', 'Great Cities Series' ], event:'Signing', date:'7/13/22', time:'10:00am', tickets:50}, 
    {name: 'Cathy O neal', genera: 'non-fiction', books:['Weapons of Math Destruction'], event:'Reading', date:'7/10/22', time:'3:00pm', tickets:50}, 
    {name: 'Arkady Martine', genera: 'scifi', books:['A Memory Called Empire'], event:'Signing', date:'7/11/22', time:'5:00pm', tickets:50},
    {name: 'Ann Leckie', genera: 'sci-fi, fantasy', books:['Ancillary Justice', 'Ancillary Sword', 'Ancillary Mercy', 'The Raven Tower'], event:'Reading', date:'7/21/22', time: '11:00am', tickets:50}
    ]
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


  render(){
    return (
      <div >
        <Authors authorsArr={this.state.authorsArr} getTicket={this.getTicket} addAuthorEvent={this.addAuthorEvent}/>
      </div>
    );
  }
}

export default App;
