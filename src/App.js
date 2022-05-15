import './App.css'
import {useState,useEffect} from 'react'
import getDoggies from './services/getDoggies';




function App() {

  const [perrito,setPerrito]=useState('')
  const [value,setValue]=useState(0)


  useEffect(()=>{
    getDoggies()
    .then(res=>{
      console.log(res.data)
      setPerrito(res.data.message)
      
    })
    .catch()
    
  },[value])




  return (
    <div className="App">
      <header className='App-header'>

        <img src={perrito} alt="" /> 
        <button onClick={()=>setValue(value+1)}>Cambiar Imagen</button>   

   </header>
    </div>
  );
}

export default App;
