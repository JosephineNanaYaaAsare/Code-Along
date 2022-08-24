import TaskManager from "./Pages/TaskManager";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Navbar from "./components/Navbar";
import ProductDetail from "./Pages/ProductDetail";
import NotFound from "./Pages/NotFound";

function App() {
   return ( 
     <BrowserRouter>
       <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/product" element={<ProductList />} />
         <Route path="/product/:productId" element={<ProductDetail />} />
         <Route path="/task-manager" element={<TaskManager />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="*" element={<NotFound />} />
       </Routes>
     </BrowserRouter>
    ) ;
}




export default  App;