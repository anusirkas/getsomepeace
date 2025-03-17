import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cottages from "./Cottages";
import Header from "./Header"; // ✅ Import the Header component

const App = () => {
  return (
    <Router>
      <Header /> {/* ✅ Ensures the navigation is always visible */}
      <Routes>
        {/* ✅ Each route now ONLY renders its own component */}
        <Route path="/" element={<Home />} />
        <Route path="/cottages" element={<Cottages />} />
      </Routes>
    </Router>
  );
};

export default App;
