import { useState } from "react";
import { instagramPosts, explorePosts } from "../../services/api";
import { FaVideo, FaHeart, FaRegComment } from "react-icons/fa";
import "./Pesquisa.css";

function Pesquisa() {
  const [busca, setBusca] = useState("");
  const termoBusca = busca.trim().toLowerCase();

  // Filtra resultados e remove usuários duplicados ou inválidos da busca
  const perfisFiltrados =
    termoBusca === ""
      ? []
      : (instagramPosts || [])
          .filter(
            (post) =>
              post?.usuario?.username &&
              (post.usuario.username.toLowerCase().includes(termoBusca) ||
                post?.usuario?.nome?.toLowerCase().includes(termoBusca))
          )
          .filter(
            (post, index, self) =>
              index ===
              self.findIndex(
                (p) => p?.usuario?.username === post?.usuario?.username
              )
          );

  const listaExplorar = explorePosts || [];

  return (
    <main className="pesquisa">
      <form
        className="barra-pesquisa"
        role="search"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="search"
          placeholder="Pesquisar"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          aria-label="Pesquisar usuários"
          autoComplete="off"
        />
      </form>

      <div className="resultados-pesquisa" aria-live="polite">
        {termoBusca !== "" && perfisFiltrados.length === 0 ? (
          <p className="nenhum-usuario">Nenhum usuário encontrado.</p>
        ) : (
          perfisFiltrados.map((post, index) => {
            // Garante que a key seja sempre string válida e única
            const keyPerfil =
              post?.usuario?.id || post?.usuario?.username || `perfil-${index}`;

            return (
              <div className="perfil-resultado" key={keyPerfil}>
                <img
                  src={post.usuario.avatar}
                  alt={`Foto de perfil de ${
                    post.usuario.nome || post.usuario.username
                  }`}
                  width="44"
                  height="44"
                  loading="lazy"
                  decoding="async"
                />

                <div>
                  <strong>{post.usuario.username}</strong>
                  <span>{post.usuario.nome}</span>
                </div>
              </div>
            );
          })
        )}
      </div>

      <h2>Explorar</h2>

      <section className="explorar" aria-label="Galeria do explorar">
        <div className="explorar-grid">
          {listaExplorar.map((post, index) => {
            // Garante fallback robusto caso post.id não exista
            const keyItem = post?.id ?? `explore-${index}`;

            return (
              <div className="explorar-item" key={keyItem}>
                {post.tipo === "reels" ? (
                  <>
                    <video
                      src={post.midia.url}
                      poster={post.midia.thumbnail}
                      muted
                      preload="none"
                      width="300"
                      height="300"
                      aria-label="Vídeo do explorar"
                    />
                    <FaVideo className="icone-reel" aria-hidden="true" />
                  </>
                ) : (
                  <img
                    src={post.midia.url}
                    alt={post.midia.alt || "Publicação do explorar"}
                    width="300"
                    height="300"
                    loading="lazy"
                    decoding="async"
                  />
                )}

                <div className="explorar-hover">
                  <FaHeart aria-hidden="true" />
                  <FaRegComment aria-hidden="true" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Pesquisa;