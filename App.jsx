import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BaseLayout from "./src/layout/BaseLayout";
import Homepage from "./src/pages/homepage/Homepage";
import Login from "./src/pages/login/Login";
import Profile from "./src/pages/profile/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <BaseLayout>
              <Homepage />
            </BaseLayout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

