import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Home from "./routes/home/Home";
import Register from "./routes/register/Register";
import Login from "./routes/login/Login";
import Attractions from "./routes/attractions/Attractions";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <div className="app-flex-container">
              <div>
                  <Navbar/>
              </div>
            <div className="content">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/attractions" element={<Attractions />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
