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
   // alert('DisplayMyHome '+ myBool)
  }

 return(<div className='container_div'><h1>Press button to see my Home Address</h1>
  <div className='inner_div'>
    <button className='Button' onClick={DisplayMyHome}>ShowMyHome</button>
  </div>
  <div className={myBool?'hidden':''}>
  <MyHome myBool></MyHome>
  </div></div>);
}
export default App;
