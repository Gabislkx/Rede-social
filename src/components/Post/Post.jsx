import React, { useState, useRef } from "react";
import { FaRegHeart, FaHeart, FaRegComment, FaCheck } from "react-icons/fa";
import { RiBookmarkLine, RiBookmarkFill } from "react-icons/ri";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import "./Post.css";

function Post({ post }) {
  const [curtido, setCurtido] = useState(post.curtidoPeloUsuario);
  const [curtidas, setCurtidas] = useState(post.curtidas);
  const [salvo, setSalvo] = useState(post.salvoPeloUsuario);
  const [imagemAtual, setImagemAtual] = useState(0);
  const [comentarios, setComentarios] = useState(post.comentarios || []);
  const [novoComentario, setNovoComentario] = useState("");
  const [mostrarTodosComentarios, setMostrarTodosComentarios] = useState(false);

  const commentInputRef = useRef(null);

  const handleLike = () => {
    setCurtido((prev) => !prev);
    setCurtidas((prev) => (curtido ? prev - 1 : prev + 1));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (novoComentario.trim() === "") return;

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

  return (
    <article className="post">
      <header className="post-header">
        <img
          src={post.usuario.avatar}
          alt={`Foto de perfil de ${post.usuario.nome}`}
          width="40"
          height="40"
          loading="lazy"
        />
        <div className="post-user">
          <strong>
            {post.usuario.username}
            {post.usuario.verificado && (
              <span className="verificado" title="Conta verificada">
                <FaCheck aria-hidden="true" />
              </span>
            )}
          </strong>
          <span>{post.usuario.nome}</span>

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

      <div className="post-image-container">
        {post.tipo === "reels" ? (
          <video
            className="post-image"
            src={post.midia[0].url}
            poster={post.midia[0].thumbnail}
            controls
            aria-label="Vídeo da publicação"
          />
        ) : post.tipo === "carousel" ? (
          <div className="carousel">
            <img
              className="post-image"
              src={post.midia[imagemAtual].url}
              alt={post.midia[imagemAtual].alt || `Imagem ${imagemAtual + 1} do carrossel`}
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
                <IoMdArrowDropleftCircle aria-hidden="true" />
              </button>
            )}
            {imagemAtual < post.midia.length - 1 && (
              <button
                type="button"
                className="carousel-button carousel-next"
                onClick={() => setImagemAtual((prev) => prev + 1)}
                aria-label="Próxima imagem"
              >
                <IoMdArrowDroprightCircle aria-hidden="true" />
              </button>
            )}
            <div className="carousel-indicators" role="tablist">
              {post.midia.map((_, index) => (
                <span
                  key={index}
                  className={index === imagemAtual ? "active" : ""}
                  aria-label={`Slide ${index + 1}`}
                ></span>
              ))}
            </div>
          </div>
        ) : (
          <img
            className="post-image"
            src={post.midia[0].url}
            alt={post.midia[0].alt || "Imagem da publicação"}
            loading="lazy"
            decoding="async"
            width="600"
            height="600"
          />
        )}
      </div>

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

      <div className="post-info">
        <strong>{curtidas} curtidas</strong>

        <p>
          <strong>{post.usuario.username}</strong> {post.legenda}
        </p>

        {comentarios.length > 0 && (
          <div className="post-comments">
            <button
              type="button"
              className="view-comments"
              onClick={() =>
                setMostrarTodosComentarios((prev) => !prev)
              }
              aria-expanded={mostrarTodosComentarios}
            >
              {mostrarTodosComentarios
                ? "Ocultar comentários"
                : `Ver todos os ${comentarios.length} comentários`}
            </button>
            {(mostrarTodosComentarios
              ? comentarios
              : comentarios.slice(0, 2)
            ).map((comentario) => (
              <p key={comentario.id}>
                <strong>{comentario.username}</strong> {comentario.texto}
              </p>
            ))}
          </div>
        )}
      </div>

      <time
        className="post-date"
        dateTime={post.dataPublicacao}
      >
        {new Date(post.dataPublicacao).toLocaleDateString("pt-BR")}
      </time>

      <form className="add-comment" onSubmit={handleCommentSubmit}>
        <label htmlFor={`comentario-${post.id}`} className="sr-only">
          Adicionar um comentário
        </label>
        <input
          ref={commentInputRef}
          id={`comentario-${post.id}`}
          type="text"
          placeholder="Adicionar um comentário..."
          value={novoComentario}
          onChange={(e) => setNovoComentario(e.target.value)}
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
}

export default Post;