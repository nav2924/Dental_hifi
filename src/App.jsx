import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import HandsOnSession from "./pages/HandsOnSession.jsx";
import { selectUsers, setUser } from "./store/usersSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { AuthProvider } from "./context/AuthContext";
import HandsOnDelhi2 from "./pages/Delhi/HandsOnDelhiEvent2.jsx";
import HandsOnDelhi3 from "./pages/Delhi/HandsOnDelhiEvent3.jsx";
import HandsOnDelhi1 from "./pages/Delhi/HandsOnDelhiEvent1.jsx";
import HandsOnMumbai1 from "./pages/Mumbai/HandsOnMumbaiEvent1.jsx";
import HandsOnMumbai2 from "./pages/Mumbai/HandsOnMumbaiEvent2.jsx";
import HandsOnMumbai3 from "./pages/Mumbai/HandsOnMumbaiEvent3.jsx";
import HandsOnPune1 from "./pages/Pune/HandsOnPuneEvent1.jsx";
import HandsOnPune2 from "./pages/Pune/HandsOnPuneEvent2.jsx";
import HandsOnPune3 from "./pages/Pune/HandsOnPuneEvent3.jsx";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUsers) || {};
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      dispatch(setUser({ currentUser: true }));
    }
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>; // Display loader while loading
  }

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/delhievent1" element={<HandsOnDelhi1 />} />
          <Route path="/delhievent2" element={<HandsOnDelhi2 />} />
          <Route path="/delhievent3" element={<HandsOnDelhi3 />} />
          <Route path="/mumbaievent1" element={<HandsOnMumbai1 />} />
          <Route path="/mumbaievent2" element={<HandsOnMumbai2 />} />
          <Route path="/mumbaievent3" element={<HandsOnMumbai3 />} />
          <Route path="/puneevent1" element={<HandsOnPune1 />} />
          <Route path="/puneevent2" element={<HandsOnPune2 />} />
          <Route path="/puneevent3" element={<HandsOnPune3 />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
