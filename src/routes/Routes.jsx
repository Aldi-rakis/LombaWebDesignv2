//import react router dom
import { Routes, Route } from "react-router-dom";

//=======================================================================
//ADMIN
//=======================================================================

//import view Login
import Home from '../page/Homepage';

import Pesanan from "../page/pesanan";

function RoutesIndex() {
    return (
        <Routes>

            {/* route "homepage" */}
            <Route path="/" element={<Home />} />


             {/* route "homepage" */}
             <Route path="/pesan" element={<Pesanan />} />


        </Routes>
    )
}

export default RoutesIndex

