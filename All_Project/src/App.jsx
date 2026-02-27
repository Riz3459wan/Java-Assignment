import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TodoList from "./components/TodoList";
import TextAnalizer from "./components/TextAnalizer";
import ShareCalculate from "./components/ShareCalculate";
import SeatBooking from "./components/SeatBooking";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/text" element={<TextAnalizer />} />
        <Route path="/share" element={<ShareCalculate />} />
        <Route path="/seat" element={<SeatBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
