import React,{ useState }  from 'react';
import './css/style.css';
import Header from './components/Header';
import Order from './components/Order';
import Inventory from './components/Inventory';
// import StorePicker from './components/StorePicker';
// import SearchSrore from './components/SearchSrore';

function App() {
  let [fishes,setFishes] = useState([]);
  let [order,setOrder] = useState([])

  function setAllFishes(fish){

  }
  function loadSampleFishes (){
    alert('loadSample');
  }


  return (
    <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" age={100} />
        </div>
        
        <Order />
        <Inventory loadSampleFishes={loadSampleFishes} setFishes={setFishes} fishes={fishes}/>
        
      </div>
  );
}

export default App;

// class App extends React.Component{
//  render(){
//     return <h1>
//       Hello Love
//     </h1>
//   }
// }