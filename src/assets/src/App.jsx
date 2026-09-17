import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Layout from "./Layout";
import Pesquisa from "./pages/Pesquisa/Pesquisa";
import Perfil from "./pages/Perfil/Perfil";
import Login from "./pages/Login/Login";

function App() {
  const [logado, setLogado] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login setLogado={setLogado} />}
        />
        <Route element={<Layout />}>
          <Route path="/feed" element={<Home />} />
          <Route path="/pesquisa" element={<Pesquisa />} />
          <Route path="/perfil" element={<Perfil />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;