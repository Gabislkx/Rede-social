import { useState, useEffect } from "react";
import { instagramPosts, explorePosts } from "../../services/api";
import { FaVideo, FaHeart, FaRegComment } from "react-icons/fa";
import "./Pesquisa.css";
import logoImg from "../../2.png";

function Pesquisa() {
  const [busca, setBusca] = useState("");

  // SEO: Adiciona meta descrição dinâmica e título para o Lighthouse
  useEffect(() => {
    document.title = "Pesquisar e Explorar | Nox";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.content =
      "Encontre perfis, fotos, vídeos e conteúdos em alta na aba Explorar. Conecte-se com novos criadores na plataforma.";

    return () => {
      metaDescription.content = "";
    };
  }, []);

  const perfisFiltrados =
    busca.trim() === ""
      ? []
      : instagramPosts.filter(
          (post) =>
            post.usuario.username.toLowerCase().includes(busca.toLowerCase()) ||
            post.usuario.nome.toLowerCase().includes(busca.toLowerCase())
        );

return (
  <main className="pesquisa">
    <div className="topo-pesquisa">
      <img
        src={logoImg}
        alt="Nox Social"
        className="logo-nox"
      />

      <div className="barra-pesquisa">
        <label htmlFor="input-pesquisa" className="sr-only">
          Pesquisar usuários
        </label>

        <input
          id="input-pesquisa"
          type="text"
          placeholder="Pesquisar"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          aria-label="Campo de pesquisa de usuários"
        />
      </div>
    </div>

    <div className="resultados-pesquisa" aria-live="polite">
        {busca.trim() !== "" && perfisFiltrados.length === 0 ? (
          <p className="nenhum-usuario">Nenhum usuário encontrado.</p>
        ) : (
          perfisFiltrados.map((post) => (
            <div className="perfil-resultado" key={post.usuario.username}>
              <img
                src={post.usuario.avatar}
                alt={`Foto de perfil de ${post.usuario.nome}`}
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
          ))
        )}
      </div>

      <h2>Explorar</h2>

      <section className="explorar" aria-label="Conteúdos em destaque">
        <div className="explorar-grid">
          {explorePosts.map((post) => (
            <div className="explorar-item" key={post.id || post.midia.url}>
              {post.tipo === "reels" ? (
                <>
                  <video
                    src={post.midia.url}
                    poster={post.midia.thumbnail}
                    muted
                    preload="none"
                    aria-label="Vídeo do Reels"
                    width="300"
                    height="300"
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
                <span>
                  <FaHeart aria-hidden="true" />
                  <span className="sr-only"></span>
                </span>
                <span>
                  <FaRegComment aria-hidden="true" />
                  <span className="sr-only"></span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Pesquisa;