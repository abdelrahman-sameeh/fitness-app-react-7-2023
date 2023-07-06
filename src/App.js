import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/utility/Navbar";
import Footer from "./components/utility/Footer";
import ExercisePage from "./pages/ExercisePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exercise/:id" element={<ExercisePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
