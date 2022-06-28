import News from "./components/pages/News";
import TheFooter from "./components/TheFooter";
import TheHeader from "./components/TheHeader";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <TheHeader />
      {/* <Home/> */}

      <Routes>
        <Route
          path="/"
          element={
            <News key="general" country="us" category="general" pageSize={18} />
          }
        />
        <Route
          path="/business"
          element={
            <News
              key="business"
              country="us"
              category="business"
              pageSize={18}
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              key="entertainment"
              country="us"
              category="entertainment"
              pageSize={18}
            />
          }
        />
        <Route
          path="/health"
          element={
            <News key="health" country="us" category="health" pageSize={18} />
          }
        />
        <Route
          path="/science"
          element={
            <News key="science" country="us" category="science" pageSize={18} />
          }
        />
        <Route
          path="/sports"
          element={
            <News key="sports" country="us" category="sports" pageSize={18} />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              key="technology"
              country="us"
              category="technology"
              pageSize={18}
            />
          }
        />
      </Routes>

      <TheFooter />
    </>
  );
}

export default App;
