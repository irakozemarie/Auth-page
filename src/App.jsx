import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/Signup";
import ResetPassword from "./Pages/ResetPassword";
import ForgetPassword from "./Pages/ForgetPassword";
import Auth from "./api/Auth";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />}>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
          </Route>

          <Route path="/" element={<Main />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
