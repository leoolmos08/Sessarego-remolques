import './App.css';
import AppBar from './components/AppBar';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Contacto from './components/Contacto';
import Financiacion from './components/Financiacion';
import Vehiculos from './components/vehiculos/Vehiculos';
import Footer2 from './components/Footer2';
import DetalleVehiculoContainer from './components/vehiculos/DetalleVehiculoContainer';


function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/financiacion' element={<Financiacion />} />
        <Route path='/vehiculos' element={<Vehiculos />} />
        <Route path='/vehiculos/iveco-cursor' element={<DetalleVehiculoContainer />}/>
      </Routes>
      <Footer2 />
    </BrowserRouter>
  );
}

export default App;
