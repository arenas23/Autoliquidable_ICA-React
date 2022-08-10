import React from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import '../styles/global.scss';
import Layout from "../containers/Layout";
import Forgot from "../pages/Forgot";
import RecoveryPassword from "../pages/RecoveryPassword";
import Home from "../pages/Home";
import Login from "../pages/Login"
import Informacion from "../components/informacion";
import NotFound from "../pages/NotFound";

const App = () => {
  return (
  <BrowserRouter>
  <Layout>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/forgot" element={<Forgot/>}/>
      <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/autoliquidable" element={<Informacion/>}/>
    </Routes>
  </Layout>
  
  </BrowserRouter>

    
  );
};

export default App;
