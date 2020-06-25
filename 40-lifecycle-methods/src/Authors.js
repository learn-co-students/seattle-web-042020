import React from 'react'
import AuthorsCard from './AuthorsCard.js'
import AuthorsForm from './AuthorsForm.js'
import SearchBar from './SearchBar.js'


const Authors = (props) => {

    return( 
        <React.Fragment>

        <div className="event_page_header">
        <h1>Book&More Events</h1>
        <p>author events, signings, and book clubs </p>
        </div>
        <SearchBar updateSearchTerm={props.updateSearchTerm} searchTerm={props.searchTerm}/>
        <div className="cards_container" onClick={props.clickHere}>
            
            {
            props.authorsArr.map((value,key) =><AuthorsCard author={value} key={key} authorId={key} getTicket={props.getTicket}  /> )
            
            }
        </div>
        <AuthorsForm addAuthorEvent={props.addAuthorEvent} />
    </React.Fragment>
    )
}

export default Authors