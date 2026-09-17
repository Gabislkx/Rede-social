import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgVideo from "./vecteezy_graphic-animated-background_40517718.mp4";
import "./Login.css";

export default function Login({ setLogado }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");

    if (!email || !senha) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLogado(true);
      navigate("/feed");
    } catch (err) {
      setErro("E-mail ou senha incorretos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="login-card">
        <h1>Bem-vindo(a)</h1>
        <p className="continuar">Faça login para continuar</p>

        {erro && <div className="erro-messagem">{erro}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="ex: Bruna123@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <div>
            <input type="checkbox" name="lembre" id="lembre" />
            <label htmlFor="checkbox" className="cinza">
              {" "}
              Lembre-se
            </label>
          </div>
          <div className="esqueceu a senha">
            <p className="RoxoEsqueceu direita">Esqueceu a senha?</p>
          </div>

          <button type="submit" className="botao-submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className="cinza">
          Não tem uma conta? <p className="Roxo">Cadastre-se</p>
        </p>
      </div>
    </div>
  );
}
