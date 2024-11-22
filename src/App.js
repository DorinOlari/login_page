import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Form from "./components/Form";
import Profil from "./components/Profil";


function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Form />}/>
                  <Route path="/profile" element={<Profil />}/>
              </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
