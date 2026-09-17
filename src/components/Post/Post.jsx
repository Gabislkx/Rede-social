import { useState } from "react";
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
  const [comentarios, setComentarios] = useState(post.comentarios);
  const [novoComentario, setNovoComentario] = useState("");
  const [mostrarTodosComentarios, setMostrarTodosComentarios] = useState(false);

  return (
    <article className="post">
      <header className="post-header">
        <img src={post.usuario.avatar} alt={`Foto de ${post.usuario.nome}`} />
        <div className="post-user">
          <strong>
            {post.usuario.username}
            {post.usuario.verificado && (
              <span className="verificado">
                <FaCheck />
              </span>
            )}
          </strong>
          <span>{post.usuario.nome}</span>

          {post.localizacao && (
            <small className="post-location">{post.localizacao}</small>
          )}
        </div>

        <button className="post-menu">•••</button>
      </header>
      <div className="post-image-container">
        {post.tipo === "reels" ? (
          <video
            className="post-image"
            src={post.midia[0].url}
            poster={post.midia[0].thumbnail}
            controls
          />
        ) : post.tipo === "carousel" ? (
          <div className="carousel">
            <img
              className="post-image"
              src={post.midia[imagemAtual].url}
              alt={post.midia[imagemAtual].alt}
            />
            {imagemAtual > 0 && (
              <button
                className="carousel-button carousel-prev"
                onClick={() => setImagemAtual(imagemAtual - 1)}
              >
                <IoMdArrowDropleftCircle />
              </button>
            )}
            {imagemAtual < post.midia.length - 1 && (
              <button
                className="carousel-button carousel-next"
                onClick={() => setImagemAtual(imagemAtual + 1)}
              >
                <IoMdArrowDroprightCircle />
              </button>
            )}
            <div className="carousel-indicators">
              {post.midia.map((_, index) => (
                <span
                  key={index}
                  className={index === imagemAtual ? "active" : ""}
                ></span>
              ))}
            </div>
          </div>
        ) : (
          <img
            className="post-image"
            src={post.midia[0].url}
            alt={post.midia[0].alt}
          />
        )}
      </div>

      <div className="post-actions">
        <div className="post-actions-left">
          <button
            className={`action-button ${curtido ? "curtido" : ""}`}
            onClick={() => {
              setCurtido(!curtido);

              setCurtidas(curtido ? curtidas - 1 : curtidas + 1);
            }}
          >
            {curtido ? <FaHeart /> : <FaRegHeart />}
          </button>

          <button
            className="action-button"
            onClick={() => {
              document.querySelector(`#comentario-${post.id}`).focus();
            }}
          >
            <FaRegComment />
          </button>
        </div>

        <button
          className={`action-button ${salvo ? "salvo" : ""}`}
          onClick={() => setSalvo(!salvo)}
        >
          {salvo ? <RiBookmarkFill /> : <RiBookmarkLine />}
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
              className="view-comments"
              onClick={() =>
                setMostrarTodosComentarios(!mostrarTodosComentarios)
              }
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
      <small className="post-date">
        {new Date(post.dataPublicacao).toLocaleDateString("pt-BR")}
      </small>
      <div className="add-comment">
        <input
          id={`comentario-${post.id}`}
          type="text"
          placeholder="Adicionar um comentário..."
          value={novoComentario}
          onChange={(e) => setNovoComentario(e.target.value)}
        />

        <button
          onClick={() => {
            if (novoComentario.trim() === "") return;

            const comentario = {
              id: Date.now(),
              username: "você",
              texto: novoComentario,
              curtidas: 0,
              dataCriacao: new Date().toISOString(),
            };

            setComentarios([...comentarios, comentario]);
            setNovoComentario("");
          }}
        >
          Publicar
        </button>
      </div>
    </article>
  );
}

export default Post;
