import React, { useState, useRef, memo, useEffect } from "react";
import { 
  FaRegHeart, 
  FaHeart, 
  FaRegComment, 
  FaCheck, 
  FaChevronLeft, 
  FaChevronRight 
} from "react-icons/fa";
import { RiBookmarkLine, RiBookmarkFill } from "react-icons/ri";
import "./Post.css";

const Post = memo(function Post({ post }) {
  const [curtido, setCurtido] = useState(post?.curtidoPeloUsuario || false);
  const [curtidas, setCurtidas] = useState(post?.curtidas || 0);
  const [salvo, setSalvo] = useState(post?.salvoPeloUsuario || false);
  const [imagemAtual, setImagemAtual] = useState(0);
  const [comentarios, setComentarios] = useState(post?.comentarios || []);
  const [novoComentario, setNovoComentario] = useState("");
  const [mostrarTodosComentarios, setMostrarTodosComentarios] = useState(false);

  const commentInputRef = useRef(null);


  useEffect(() => {
    if (!post) return;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    const autor = post.usuario?.nome || post.usuario?.username || "Usuário";
    const legendaLimpa = post.legenda ? post.legenda.trim() : "Confira esta publicação na plataforma.";
    const descricaoText = `Publicação de ${autor}: ${legendaLimpa}`;

    metaDescription.content = descricaoText.substring(0, 160);

    return () => {
      metaDescription.content = "";
    };
  }, [post]);

  if (!post) return null;

  const handleLike = () => {
    setCurtido((prev) => !prev);
    setCurtidas((prev) => (curtido ? prev - 1 : prev + 1));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!novoComentario.trim()) return;

    const comentario = {
      id: Date.now(),
      username: "você",
      texto: novoComentario,
      curtidas: 0,
      dataCriacao: new Date().toISOString(),
    };

    setComentarios((prev) => [...prev, comentario]);
    setNovoComentario("");
  };

  // SEO: Schema.org em JSON-LD
  const jsonLdPost = {
    "@context": "https://schema.org",
    "@type": "SocialMediaPosting",
    "headline": post.legenda ? post.legenda.substring(0, 110) : "Publicação na Nox",
    "articleBody": post.legenda || "",
    "datePublished": post.dataPublicacao,
    "author": {
      "@type": "Person",
      "name": post.usuario?.nome || "Usuário",
      "alternateName": `@${post.usuario?.username || ""}`,
      "image": post.usuario?.avatar
    },
    "interactionStatistic": [
      {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/LikeAction",
        "userInteractionCount": curtidas
      },
      {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/CommentAction",
        "userInteractionCount": comentarios.length
      }
    ]
  };

  const midias = post.midia || [];

  return (
    <article className="post">
      {/* SEO: Microdados */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPost) }}
      />

      {/* HEADER DA PUBLICAÇÃO */}
      
      <header className="post-header">
        <img
          src={post.usuario?.avatar}
          alt={`Foto de perfil de ${post.usuario?.nome || "usuário"}`}
          width="40"
          height="40"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
        <div className="post-user">
          <strong>
            {post.usuario?.username}
            {post.usuario?.verificado && (
              <span className="verificado" title="Conta verificada">
                <FaCheck aria-hidden="true" />
              </span>
            )}
          </strong>
          <span>{post.usuario?.nome}</span>

          {post.localizacao && (
            <small className="post-location">{post.localizacao}</small>
          )}
        </div>

        <button
          type="button"
          className="post-menu"
          aria-label="Mais opções da publicação"
        >
          •••
        </button>
      </header>

      {/* CONTAINER DE MÍDIA */}
      <div className="post-image-container">
        {post.tipo === "reels" ? (
          <video
            className="post-image"
            src={midias[0]?.url}
            poster={midias[0]?.thumbnail}
            controls
            preload="none"
            aria-label="Vídeo da publicação"
            width="600"
            height="600"
          />
        ) : post.tipo === "carousel" && midias.length > 0 ? (
          <div className="carousel">
            <img
              className="post-image"
              src={midias[imagemAtual]?.url}
              alt={midias[imagemAtual]?.alt || `Imagem ${imagemAtual + 1} do carrossel`}
              loading="lazy"
              decoding="async"
              width="600"
              height="600"
            />
            {imagemAtual > 0 && (
              <button
                type="button"
                className="carousel-button carousel-prev"
                onClick={() => setImagemAtual((prev) => prev - 1)}
                aria-label="Imagem anterior"
              >
                <FaChevronLeft aria-hidden="true" />
              </button>
            )}
            {imagemAtual < midias.length - 1 && (
              <button
                type="button"
                className="carousel-button carousel-next"
                onClick={() => setImagemAtual((prev) => prev + 1)}
                aria-label="Próxima imagem"
              >
                <FaChevronRight aria-hidden="true" />
              </button>
            )}
            <div className="carousel-indicators" role="tablist" aria-label="Navegação do carrossel">
              {midias.map((_, index) => (
                <span
                  key={`indicator-${post.id}-${index}`}
                  className={index === imagemAtual ? "active" : ""}
                  role="tab"
                  aria-selected={index === imagemAtual}
                  aria-label={`Ir para a imagem ${index + 1}`}
                ></span>
              ))}
            </div>
          </div>
        ) : (
          <img
            className="post-image"
            src={midias[0]?.url}
            alt={midias[0]?.alt || "Imagem da publicação"}
            loading="lazy"
            decoding="async"
            width="600"
            height="600"
          />
        )}
      </div>

      {/* AÇÕES */}
      <div className="post-actions">
        <div className="post-actions-left">
          <button
            type="button"
            className={`action-button ${curtido ? "curtido" : ""}`}
            onClick={handleLike}
            aria-label={curtido ? "Descurtir publicação" : "Curtir publicação"}
          >
            {curtido ? (
              <FaHeart aria-hidden="true" />
            ) : (
              <FaRegHeart aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            className="action-button"
            onClick={() => commentInputRef.current?.focus()}
            aria-label="Comentar na publicação"
          >
            <FaRegComment aria-hidden="true" />
          </button>
        </div>

        <button
          type="button"
          className={`action-button ${salvo ? "salvo" : ""}`}
          onClick={() => setSalvo((prev) => !prev)}
          aria-label={salvo ? "Remover dos salvos" : "Salvar publicação"}
        >
          {salvo ? (
            <RiBookmarkFill aria-hidden="true" />
          ) : (
            <RiBookmarkLine aria-hidden="true" />
          )}
        </button>
      </div>

      {/* CONTEÚDO E COMENTÁRIOS */}
      <div className="post-info">
        <strong className="post-likes-count">
          {curtidas.toLocaleString("pt-BR")} {curtidas === 1 ? "curtida" : "curtidas"}
        </strong>

        <p className="post-caption">
          <strong>{post.usuario?.username}</strong> {post.legenda}
        </p>

        {comentarios.length > 0 && (
          <div className="post-comments">
            <button
              type="button"
              className="view-comments"
              onClick={() => setMostrarTodosComentarios((prev) => !prev)}
              aria-expanded={mostrarTodosComentarios}
            >
              {mostrarTodosComentarios
                ? "Ocultar comentários"
                : `Ver todos os ${comentarios.length} comentários`}
            </button>
            {(mostrarTodosComentarios ? comentarios : comentarios.slice(0, 2)).map(
              (comentario) => (
                <p key={comentario.id} className="comment-item">
                  <strong>{comentario.username}</strong> {comentario.texto}
                </p>
              )
            )}
          </div>
        )}
      </div>

      {/* DATA */}
      {post.dataPublicacao && (
        <time className="post-date" dateTime={post.dataPublicacao}>
          {new Date(post.dataPublicacao).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </time>
      )}

      {/* FORMULÁRIO DE COMENTÁRIO */}
      <form className="add-comment" onSubmit={handleCommentSubmit}>
        <label htmlFor={`comentario-input-${post.id}`} className="sr-only">
          Adicionar um comentário
        </label>
        <input
          ref={commentInputRef}
          id={`comentario-input-${post.id}`}
          type="text"
          placeholder="Adicionar um comentário..."
          value={novoComentario}
          onChange={(e) => setNovoComentario(e.target.value)}
          autoComplete="off"
        />

        <button
          type="submit"
          disabled={!novoComentario.trim()}
          aria-label="Publicar comentário"
        >
          Publicar
        </button>
      </form>
    </article>
  );
});

export default Post;