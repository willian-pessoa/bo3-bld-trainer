import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

//Main Pages
import LayoutPage from "./pages/layoutPage/layoutPage.jsx"
import HomePage from "./pages/home/homePage.jsx"
import ProfilePage from "./pages/profile/profilePage.jsx"
import RankingPage from "./pages/ranking/rankingPage.jsx"
import BldPage from './pages/bld/bldPage.jsx';
import CornersPage from "./pages/corners/cornersPage.jsx"
import EdgesPage from "./pages/edges/edgesPage.jsx"
import MbldPage from "./pages/mbld/mbldPage.jsx"
import LoginPage from "./pages/login/loginPage.jsx"
import NotFoundPage from './pages/notFoundPage.jsx';

//Sub Pages

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route index path="home" element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="ranking" element={<RankingPage />} />
          <Route path="bld" element={<BldPage />} />
          <Route path="corners" element={<CornersPage />} />
          <Route path="edges" element={<EdgesPage />} />
          <Route path="mbld" element={<MbldPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
