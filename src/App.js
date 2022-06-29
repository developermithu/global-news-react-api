import News from "./components/pages/News";
import TheFooter from "./components/TheFooter";
import TheHeader from "./components/TheHeader";
import { Routes, Route } from "react-router-dom";

function App() {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  return (
    <>
      <TheHeader />

      <Routes>
        <Route
          path="/"
          element={
            <News
              apiKey={apiKey}
              key="general"
              country="us"
              category="general"
              pageSize={pageSize}
            />
          }
        />
        <Route
          path="/business"
          element={
            <News
              apiKey={apiKey}
              key="business"
              country="us"
              category="business"
              pageSize={pageSize}
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              apiKey={apiKey}
              key="entertainment"
              country="us"
              category="entertainment"
              pageSize={pageSize}
            />
          }
        />
        <Route
          path="/health"
          element={
            <News
              apiKey={apiKey}
              key="health"
              country="us"
              category="health"
              pageSize={pageSize}
            />
          }
        />
        <Route
          path="/science"
          element={
            <News
              apiKey={apiKey}
              key="science"
              country="us"
              category="science"
              pageSize={pageSize}
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News
              apiKey={apiKey}
              key="sports"
              country="us"
              category="sports"
              pageSize={pageSize}
            />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              apiKey={apiKey}
              key="technology"
              country="us"
              category="technology"
              pageSize={pageSize}
            />
          }
        />
      </Routes>

      <TheFooter />
    </>
  );
}

export default App;
