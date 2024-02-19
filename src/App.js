import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/style.css';

//import {x} from "./Resume 2023.pdf"

import { Routes, Route } from "react-router-dom";
import { HomePage, DemoReel } from "./views/pages";

function App() {
  return (
      <div className='App'>
        <Routes>
          <Route path='*' element={<HomePage />} />
          
          <Route exact path="/" element = {<HomePage />} />
          <Route path="/Evan-Svendsen/demo-reel" element = {<DemoReel />} />
        </Routes>
      </div>
  );
}

export default App;