
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, BrowserRouter as Router} from "react-router-dom";
import { Routes } from "react-router-dom";
import BlogPage from "./components/Page/Blogpage";
 
function App() {
  return (
  <>
      <Router>
      <Header /> 
      <Routes>
        <Route path='/' element={<BlogPage />} />
      </Routes>
      <Footer />
    </Router>
  </>
  );
}

export default App;