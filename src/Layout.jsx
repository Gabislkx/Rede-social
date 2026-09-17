import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NovaPostagem from "./components/NovaPostagem/NovaPostagem";
import Messages from "./components/Messages/Messages";

function Layout() {
  const [mostrarPostagem, setMostrarPostagem] = useState(false);

  return (
    <>
      <Navbar setMostrarPostagem={setMostrarPostagem} />

      {mostrarPostagem && (
        <NovaPostagem setMostrarPostagem={setMostrarPostagem} />
      )}

      <Outlet />

      <Messages />
    </>
  );
}

export default Layout;
