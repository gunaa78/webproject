import Navebar from "./component/Navebar";
import Home from "./component/Home";
import Courses from "./component/Courses";
import Services from "./component/Services";
import Whyhikoo from "./component/Whyhikoo";
import Internship from "./component/Internship";
import InternshipApplication from "./component/InternshipApplication";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <div>

        <Navebar />

        <Routes>

          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Courses />
                <Services />
                <Whyhikoo />
                <Internship />
              </>
            }
          />

          {/* Internship Page */}
          <Route
            path="/internship"
            element={<InternshipApplication />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;