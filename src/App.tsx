import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import PopularRecipes from "./routes/PopularRecipes";

function App() {

    return(
        <>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipes" element={<PopularRecipes/>}/>
        </Routes>
        </>
    )

}

export default App;