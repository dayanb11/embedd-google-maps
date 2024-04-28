import './App.css';
import MyHome from './MyHome';
import { useState } from "react";

function App() {
  const [myBool=false, setmyBool] = useState(true);
  function toggleBool() {
    setmyBool(!myBool)
  }

  function DisplayMyHome(){
    toggleBool();
    alert('DisplayMyHome '+ myBool)
  }

 return(<div className='container_div'>
  <div className='inner_div'>
    <button className='Button' onClick={DisplayMyHome}>ShowMyHome</button>
  </div>
  <MyHome myBool></MyHome>
  </div>);
}
export default App;
