import './App.css'
import Login from './login_page/login';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return(
    <div>
      <Routes>
        <Route path = "/login" element = {<Login/>} />
        <Route path = "/" element = {<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
