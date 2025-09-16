import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/contact/Contact";
import SignUp from "./components/SignUp";
import Courses from "./pages/Courses/Courses";
import { useAuth } from "./context/AuthProvider";

function App() {
    const [authUser,setAuthUser]= useAuth();
  console.log(authUser);
  return (<>
    <Router>
      <Routes>
        {/* Wrap all pages inside Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="course" element={authUser?<Courses />:<Navigate to='/signup'/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
   
    </>
    
  );
}

export default App;
