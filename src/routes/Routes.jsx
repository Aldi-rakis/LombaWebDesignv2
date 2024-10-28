//import react router dom
import { Routes, Route } from "react-router-dom";

//=======================================================================
//ADMIN
//=======================================================================

//import view Login
import Home from '../page/Homepage';

import Pesanan from "../page/pesanan";
import GeminiAIComponent from "../page/Gemini";
import NotFound from "../page/NotFound";

function RoutesIndex() {
    return (
        <Routes>

            {/* route "homepage" */}
            <Route path="/" element={<Home />} />


             {/* route "homepage" */}
             <Route path="/pesan" element={<Pesanan />} />

             <Route path="/ai" element={<GeminiAIComponent />} />

             <Route path="*" element={<NotFound />} />


        </Routes>
    )
}

export default RoutesIndex

