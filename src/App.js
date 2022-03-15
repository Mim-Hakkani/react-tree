/* eslint-disable react/jsx-pascal-case */

import './App.css';
import D3_tree from './Components/D3/D3_tree';

import Orranizational_tree from './Components/Orranizational_tree';


function App() {
  return (
    <div className="App">
      <h1>Organizational Tree Example without json normal way is : react-organizational-chart</h1> 
       <Orranizational_tree />
        
      <h1 style={{color:'red',marginTop:'15px'}}>D3 Tree Example with json api way is : react-d3-tree</h1>

      <D3_tree />
    
    </div>
  );
}

export default App;


