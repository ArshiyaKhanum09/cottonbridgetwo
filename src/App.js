import { Routes, Route } from "react-router-dom";
import Farmershome from "./Farmershome";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Categories from "./Categories";
import Footer from "./Footer";
import Navigatebar from "./Navigatebar";
import Home from './Home';
import Login from './Login'
import Signin from './Signin';

function App() {
  return (
    <div className="App">
   <Routes>
      <Route path="*" element={<Navigatebar/>} />
      </Routes>
      <Routes>
      <Route path="/Home" element={<Farmershome />} />  
      <Route path="/about" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Categories" element={<Categories />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signin" element={<Signin/>} />
      </Routes>
    {/*    <Routes>
      <Route path="*" element={<Farmershome />} /> 
    </Routes>
 */}
 <Footer/>
 
    </div>
  );
}

export default App;
