import React from 'react';
import {connect} from 'react-redux'
import {increaseVote, decreaseVote} from '../actions'



const BowieCard = ({bowie,increaseVote, decreaseVote}) => {

    console.log(increaseVote)
    return(
        <div className='card'>
            <h2>Name: {bowie.name}</h2>
            <p>Votes: {bowie.votes}</p>
            <img src={bowie.image} alt={bowie.name}></img>
            <br />
            <button onClick={()=> { increaseVote(bowie.id)}}>UpVote</button>
            <button onClick={()=> { decreaseVote(bowie.id)}}>DownVote</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseVote: (id) => dispatch(increaseVote(id)),
        decreaseVote: (id) => dispatch(decreaseVote(id)),

    }
}

export default connect(null, mapDispatchToProps)(BowieCard)