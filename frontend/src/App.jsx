import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import PriorityNotifications from "./pages/PriorityNotifications";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/priority"
          element={
            <PriorityNotifications />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;