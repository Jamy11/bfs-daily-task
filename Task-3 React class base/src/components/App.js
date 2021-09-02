import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from '../sample-fishes';
import Fish from "./Fish";
import base from '../base'

class App extends React.Component {
  state ={
    fishes:{},
    order:{}
  }

  componentDidMount(){
    // console.log('Mounted')
    const localStorageRef = localStorage.getItem(this.props.match.params.storeId)
    if(localStorageRef){
      this.setState({order: JSON.parse(localStorageRef)})
    }
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`,{
      context:this,
      state:'fishes',
    })
  }

  componentDidUpdate(){
    // console.log("UPDATED")
    localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order))
  }

  componentWillUnmount(){
    // console.log('unmounting')
    base.removeBinding(this.ref)
  }



  addFish = fish =>{
    // 1. Take a copy of the existing state
    const fishes = {...this.state.fishes}
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish
    // 3. Set the new fishes object to state
    this.setState({
      fishes
    })
  }

  loadSampleFishes = () =>{
    this.setState({
      fishes:sampleFishes
    })
  }

  addToOrder =(key) =>{
    // 1. copy of state 
    const order = {...this.state.order}

    order[key] = order[key]+1 || 1

    this.setState({order})
  }

  updatedFish =(key,updatedFish) =>{
    const fishes = {...this.state.fishes}
    fishes[key] = updatedFish
    this.setState({fishes})
  }

  deleteFish = (key)=>{
    const fishes = {...this.state.fishes}


    fishes[key] = null


    this.setState({fishes})
  }

  removeFromOrder = key =>{
    const order = {...this.state.order}

    delete order[key] 

    this.setState({order})
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" age={100} />
          <ul className='fishes'>
            {/* <Fish /> */}
            { Object.keys(this.state.fishes).map(key=> <Fish key={key} details={this.state.fishes[key]} order={this.addToOrder} 
            index={key}/> ) }
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder}/>
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} 
        fishes={this.state.fishes} updatedFish={this.updatedFish} deleteFish={this.deleteFish}
        storeId={this.props.match.params.storeId}
        />
      </div>
    );
  }
}

export default App;
