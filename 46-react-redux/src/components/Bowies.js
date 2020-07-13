import React from 'react';
import BowieCard from './BowieCard';
import {connect} from 'react-redux'

const Bowies = props => {
    console.log(props)
    const mapBowies = () => {
        let bowieArray = Object.values(props.bowielist);
        let bowieCard = bowieArray.map(bowie => {
            return(
                <BowieCard
                key={ bowie.id }
                increaseVote={ props.increaseVote}
                decreaseVote={props.decreaseVote}
                bowie={bowie}
                />
            )
        })
        return bowieCard;
    }
    return (
        <div>
            <div className="container">
                {mapBowies()}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        bowielist : state.bowies,
       
    }
}


export default connect(mapStateToProps)(Bowies)