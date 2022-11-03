import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
} from "react-router-dom";

//pages
import HomePage from "./pages/home/homePage.jsx"
import LoginPage from "./pages/login/loginPage.jsx"

const BldPage = () => {
  return <h1>BLD</h1>
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="bld" element={<BldPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
