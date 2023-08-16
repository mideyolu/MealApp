import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import {Footer, Home, Navbar, RecipeDetails} from './Pages/Container'

const App = () => {
  // const id = process.env.REACT_APP_EDAMAM_APP_ID;
  // const key = process.env.REACT_APP_EDAMAM_APP_KEY;
  // console.log(key);
  // console.log(id);
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/recipes/:id" element={<RecipeDetails/>}/>
      </Routes>
      <Footer/>
      
    </Router>
  )
}

export default App