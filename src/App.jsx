import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
const App = () => {
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
};
 
export default App;
