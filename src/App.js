import './App.css';
import {useState} from 'react'



function App() {

const [count, setCount]= useState(0)


const minLimit=()=>{
  if(count > 0){
    setCount(count -1)
  }
  return
}

const maxLimit=()=>{
  if(count ==0 || count <20){
    setCount(count +1)
  }
  return
}





  return (
    <div className="App">
      <header className='App-header'>
        {count}
        <button onClick={maxLimit}>Aumentar</button>
        <button onClick={minLimit}>Disminuir</button>
   </header>
    </div>
  );
}

export default App;
