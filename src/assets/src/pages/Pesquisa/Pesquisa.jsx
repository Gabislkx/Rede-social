import { useState } from "react";
import { instagramPosts, explorePosts } from "../../services/api";
import { FaVideo, FaHeart, FaRegComment } from "react-icons/fa";
import "./Pesquisa.css";

function Pesquisa() {
  const [busca, setBusca] = useState("");
  const perfisFiltrados =
    busca.trim() === ""
      ? []
      : instagramPosts.filter(
          (post) =>
            post.usuario.username.toLowerCase().includes(busca.toLowerCase()) ||
            post.usuario.nome.toLowerCase().includes(busca.toLowerCase()),
        );

  return (
    <main className="pesquisa">
      <div className="barra-pesquisa">
        <input
          type="text"
          placeholder="Pesquisar"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>
      <div className="resultados-pesquisa">
        {busca.trim() !== "" && perfisFiltrados.length === 0 ? (
          <p className="nenhum-usuario">Nenhum usuário encontrado.</p>
        ) : (
          perfisFiltrados.map((post) => (
            <div className="perfil-resultado" key={post.usuario.username}>
              <img
                src={post.usuario.avatar}
                alt={`Foto de ${post.usuario.nome}`}
              />

              <div>
                <strong>{post.usuario.username}</strong>
                <span>{post.usuario.nome}</span>
              </div>
            </div>
          ))
        )}
      </div>

      <h2>Explorar</h2>

      <section className="explorar">
        <div className="explorar-grid">
          {explorePosts.map((post) => (
            <div className="explorar-item">
              {post.tipo === "reels" ? (
                <>
                  <video
                    src={post.midia.url}
                    poster={post.midia.thumbnail}
                    muted
                  />

                  <FaVideo className="icone-reel" />
                </>
              ) : (
                <img src={post.midia.url} alt={post.midia.alt} />
              )}

              <div className="explorar-hover">
                <FaHeart />
                <FaRegComment />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Pesquisa;
