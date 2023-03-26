import './App.css';
import './pages/style.css';
import './pages/index.css';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Schedule from './pages/schedule';
import Teamss from './pages/Teams';
import Standings from './pages/Standings';
import Home2 from './pages/Home2';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthContext } from './helpers/AuthContext'
import { useState, useEffect } from 'react'
import axios from 'axios';

import Lakers from "./pages/lakers";
import Bulls from "./pages/bulls";
import Warriors from "./pages/warriors";

// authcontext powoduje ze we wszystkich stronach w range beda widoczne zmienne
function App() {
  
  const [authState, setAuthState] = useState({username: "", id: 0, status: false});

  useEffect(() => {
    axios.get("http://localhost:3001/auth/auth", { 
      headers: {
      accessToken: localStorage.getItem("accessToken"),
    },
  })
  .then((response) => {
      if (response.data.error) {
        setAuthState({...authState, status: false});
      } else {
        setAuthState({username: response.data.username, id: response.data.id, status: true});
      }
    });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({username: "", id: 0, status: false});
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
      <header>
      <div class="logo">
          <img class="logoimage" src="logo.png" alt="NBA logo"/>
          <h3 class="titleSite">NBA site</h3>
      </div>
      <nav class="lista">
          <ul class="menu">
              <li class="lii"><a class="menu-link" href="/">Home</a></li>
              <li class="lii"><a class="menu-link" href="/schedule">Schedule</a></li>
              <li class="lii"><a class="menu-link" href="/Teamss">Teams</a></li>
              <li class="lii"><a class="menu-link" href="/Standings">Standings</a></li>
        
          </ul>
      </nav>
      
      
    </header> 
    <div class="userPanel">
      {!authState.status ? (
        <>
        <li><a class="loginNapis" href="/login">Login</a></li>
        <li><a class="registerNapis" href="/register">Register</a></li>
        </>
      ) : (
        <>
        <h1 class="loggedUser">Logged as: {authState.username}</h1>
        <button onClick={logout} className='logoutButton'>Logout</button>
        </>
        
      )}
      
      
    </div>
    <Router>
        
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/Teamss" element={<Teamss />} />
          <Route path="/Standings" element={<Standings />} />
          <Route path="/" element={<Home2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lakers" element={<Lakers />} />
          <Route path="/bulls" element={<Bulls />} />
          <Route path="/warriors" element={<Warriors />} />
          
        </Routes>
      </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
