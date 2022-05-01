import './App.css';
import Cajas from './components/Cajas';


function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Cajas titulo="Hobbie" act1="musica" act2="ejercicio" act3="VideoJuegos" color="green"/>
        <Cajas titulo="Habitos" act1="programar" act2="ver series" act3="Dormir" color="aqua"/>
        <Cajas titulo="Comidas favoritas" act1="carne asada" act2="cereal" act3="discada" color="blue"/>

   </header>
    </div>
  );
}

export default App;
