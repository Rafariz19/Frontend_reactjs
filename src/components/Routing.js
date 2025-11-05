import Reaxt from "react";
import { Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Produk from "../pages/Produk";
import Kategori from "../pages/Kategori";
import Contact from "../pages/Contact";
import Add from "../pages/produk/Add";
function Routing() {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/produk' element={<Produk/>}/>
            <Route path='/produk/Add' element={<Add/>}/>
            <Route path='/Kategori' element={<Kategori/>}/>
            <Route path='/Contact' element={<Contact/>}/>
        </Routes>
    );
}
export default Routing;
