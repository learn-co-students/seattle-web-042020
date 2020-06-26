import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.fourSushi.map(sushiItem =>  <Sushi sushi={sushiItem} key={sushiItem.id} eatSushi={props.eatSushi} wallet={props.wallet}/> )
       
        }
        <MoreButton fourMoreSushi={props.fourMoreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer