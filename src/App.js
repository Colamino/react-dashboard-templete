import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useSelector } from "react-redux";

function App() {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={`app ${theme ? "dark" : ""}`}>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List title="Add New User" />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New input={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List title="Add New Product" />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New input={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
