import React, { useState, useEffect } from "react";
import { Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import PortfolioUI from "../../pages/Homeee";
import SideBar from "../../components/Admin/SideBar/SideBar";
import { ToastContainer } from "react-toastify";
import history from "../../shared/history";
import isLogin from "../../shared/authorization";
import NotFound from "../../pages/NotFound";

function Home() {
  const [isLogged, setIsLogged] = useState(isLogin);
  const login = useSelector((state) => state.login.isLogin);

  useEffect(() => {
    setIsLogged(isLogin);
  }, [login]);

  return (
    <div className="App">
      <Router history={history}>
        {isLogged && <SideBar />}
        <Routes>
          <Route path="/" exact element={PortfolioUI} />
          <Route path="*" element={NotFound} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Home;
