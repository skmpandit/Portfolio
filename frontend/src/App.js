import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import About from "./components/About/About";
import Contect from "./components/Contact/Contect";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home"
import Login from "./components/Login/Login";
import Projects from "./components/Projects/Projects";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser, loadUser } from "./actions/user";
import AdminPanel from "./components/Admin/AdminPanel";
import Timeline from "./components/Admin/Timeline";
import Youtube from "./components/Admin/Youtube";
import Loader from "./components/Loader/Loader";
import Project from "./components/Admin/Project";

function App() {

  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  },[dispatch]);

  return (
     <Router>
       {loading ? (<Loader/>) : (
         <>
          <Header/>
          <Routes>
            <Route path="/" element={<Home youtubes={user.youtube} timelines={user.timeline} skills={user.skills}/>} />
            <Route path="/about" element={<About about={user.about}/>} />
            <Route path="/projects" element={<Projects projects={user.projects}/>}/>
            <Route path="/contact" element={<Contect/>}/>
            <Route path="/account" element={isAuthenticated ? <AdminPanel/> : <Login/>} />
            <Route path="/admin/timeline" element={isAuthenticated ? <Timeline/> : <Login/> }/>
            <Route path="/admin/youtube" element={isAuthenticated ? <Youtube/> : <Login/> }/>
            <Route path="/admin/project" element={isAuthenticated ? <Project/> : <Login/>} />
          </Routes>
          <Footer/>
         </>
       )}
     </Router>
  );
}

export default App;