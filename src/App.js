import TaskManager from "./components/TaskManager";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar"
function App() {
   return ( 
     <BrowserRouter>
       <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/product" element={<ProductList />} />
         <Route path="/task-manager" element={<TaskManager />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
       </Routes>
     </BrowserRouter>
    ) ;
}




export default  App;