import { useContext, useEffect } from "react";
import {
  useNavigate,
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { UserContext } from "./context/userContext";

import { API, setAuthToken } from "./config/api";

import Admin from "./pages/Admin";
import Portal from "./pages/Portal";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    if (!state.isLogin) {
      navigate("/admin");
    } else {
      if (state.user.role === "admin") {
        navigate("/");
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      let payload = response.data.data.user;
      payload.token = localStorage.token;

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Portal />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/edit-user/:id" element={<EditUser />} />
    </Routes>
  );
}

export default App;
