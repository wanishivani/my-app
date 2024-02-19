import {  Route, Routes,BrowserRouter} from "react-router-dom";
import LoginReg from "./components/pages/auth/LoginReg";
import ResetPassword from "./components/pages/auth/ResetPassword";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";
import Contact from "./components/pages/Contact";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import About from "./components/pages/about";
import Password from "./components/pages/Passwordchange";
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {  isAuthenticated } =useAuth0();

  return (
    <>
      <BrowserRouter>



        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginReg />} />
            <Route path="loginReg" element={<LoginReg/>} />
          
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="reset" element={<ResetPassword />} />
          
         <Route path="about" element={<About />} />
         <Route path="passwordchange" element={<Password />} />
</Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
