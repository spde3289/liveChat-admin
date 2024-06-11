import { Route, Routes } from "react-router-dom";
import HomePage from "@/page/home.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
