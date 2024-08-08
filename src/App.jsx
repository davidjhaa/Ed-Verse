import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './components/login/login';
import Signup from "./components/signup/signup";
import Home from './components/home/Home';
import { useState } from 'react';
// import { lightTheme, darkTheme } from './components/home/theme';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
