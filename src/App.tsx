import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/details/:number" Component={Details} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
