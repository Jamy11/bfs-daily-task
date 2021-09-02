import React from 'react'
import AddFishForm from './AddFishForm'

const Inventory = (props) => {
    return (
        <div className="inventory">
            Inventory!!!
            <AddFishForm setFishes={props.setFishes} fishes={props.fishes}/>
            <button onClick={props.loadSampleFishes}> Love</button>
        </div>
    )
}

export default Inventory
