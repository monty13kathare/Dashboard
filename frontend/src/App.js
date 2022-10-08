
import './App.css';
import { AddClient } from './components/AddClient';
import { LastComponent } from './components/LastComponent';
import { ModuleSetup } from './components/ModuleSetup';
import { PaymentSetup } from './components/PaymentSetup';
import { ThemeSetup } from './components/ThemeSetup';
import ViewClients from './components/ViewClients';
import Login from "./components/Login";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
   <Router>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/view' element={<ViewClients/>}/>
      <Route exact path='/add' element={<AddClient/>}/>
      <Route exact path='/pay' element={<PaymentSetup/>}/>
      <Route exact path='/pay/theme' element={<ThemeSetup/>}/>
      <Route exact path='/pay/theme/module' element={<ModuleSetup/>}/>
      <Route exact path='/pay/theme/module/success' element={<LastComponent/>}/>



    </Routes>
   </Router>
    </div>
  );
}

export default App;
