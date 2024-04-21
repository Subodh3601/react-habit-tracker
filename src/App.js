import DailyPage from "./pages/dailypage/DailyPage";
import WeekPage from "./pages/weekpage/WeekPage";
import Home from "./pages/homepage/Home";
import NavbarComponent from "./components/navbar/NavbarComponent";
import FooterComponent from "./components/footer/FooterComponent";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./redux/Store";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weekPage" element={<WeekPage />} />
          <Route path="/dailyPage" element={<DailyPage />} />
        </Routes>
      </Provider>
      <FooterComponent />
    </Router>
  );
}

export default App;
