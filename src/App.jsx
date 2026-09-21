import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, lazy, Suspense } from "react";

// 1. Substituição das importações estáticas por importações dinâmicas com React.lazy
const Login = lazy(() => import("./pages/Login/Login"));
const Layout = lazy(() => import("./Layout"));
const Home = lazy(() => import("./pages/Home"));
const Pesquisa = lazy(() => import("./pages/Pesquisa/Pesquisa"));
const Perfil = lazy(() => import("./pages/Perfil/Perfil"));

function App() {
  const [logado, setLogado] = useState(false);

  return (
    <BrowserRouter>
      <Suspense fallback={<div className="loading-spinner">Carregando...</div>}>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;