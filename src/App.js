import { useState } from 'react';
import { Header, Banner, Slider, Sillas, About, Details, SeeProducts, Footer } from './components'
import './styles/global.css'
function App() {
  const [CarritoContador, setCarritoContador] = useState(0);
  return (
    <div>

    <Header contador={CarritoContador}/>
    <Banner/>
    <Slider/> 
    <Sillas title={"NUEVA COLECCIÓN"} setCarritoContador={setCarritoContador} CarritoContador = {CarritoContador}/>
    <About/>
    <Details/>
    <SeeProducts/>
    <Sillas title={'AYUDAS PARA LA MARCHA'}/>
    <Sillas title={'TERAPIA RESPIRATORIA  '}/>
    <Footer/>
    </div>
  );
}

export default App;
