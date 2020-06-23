import React from 'react'

class AuthorsCard extends React.Component{


    render(){
        return(
            <div className='card_container'>
            <ul id='author_info'>
            <h4  >{this.props.author.name}</h4>
                <li><strong>Books:</strong></li>
                <ul className="ul_list">
                {
                    this.props.author.books.map(book => <li key={book}>{book}</li>)
                }
                </ul>
                <table>
                    <tbody>
                    <tr>
                        <th>Event:</th>
                        <td>{this.props.author.event} - </td>
                        <td>{this.props.author.date}</td>
                        <td>{this.props.author.time}</td>
                    </tr>
                    <tr>
                        <th>Tickets:</th>
                        <td>{this.props.author.tickets}</td>
                        <td><button onClick={(e)=> this.props.getTicket(e,this.props.authorId)}>Get Ticket</button></td>
                    </tr>
                    </tbody>
                </table>
            </ul>
            </div>
        )
    }

}

export default AuthorsCard