import News from "./components/pages/News";
import TheFooter from "./components/TheFooter";
import TheHeader from "./components/TheHeader";

function App() {
  return (
    <>
      <TheHeader />
      {/* <Home/> */}

      <News pageSize="18"/>

      <TheFooter />
    </>
  );
}

export default App;
