import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Landing } from "./pages/landingpage";
import { Home } from "./pages/home";
import { Checkin } from "./pages/checkin";
import { SingleVideo } from "./pages/singlevideo";
import { Setting } from "./pages/settings";
import { Profile } from "./pages/profile";
import { Login } from "./pages/login";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Landing />} path="/" />
            <Route element={<Home />} path="/home" />
            <Route element={<Checkin />} path="/checkin" />
            <Route element={<Login />} path="/login" />
            <Route element={<Setting />} path="/setting/:id" />
            <Route element={<Profile />} path="/profile" />
            <Route element={<SingleVideo />} path="/singlevideo/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
