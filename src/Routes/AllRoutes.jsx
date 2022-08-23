import HomePage from "./HomePage";
import {Route, Routes} from "react-router-dom"


function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
        </Routes>
    )
}

export default AllRoutes;