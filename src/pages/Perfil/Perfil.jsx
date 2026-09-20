import React, { useState } from "react";
import "./Perfil.css";

import { FiMoreHorizontal } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { IoHeart, IoHeartOutline, IoChatbubbleOutline } from "react-icons/io5";
import { RiSendInsLine, RiBookmarkFill, RiBookmarkLine } from "react-icons/ri";

import foto01 from "../imagem/foto01.jpg";
import foto02 from "../imagem/foto02.jpg";
import foto03 from "../imagem/foto03.jpg";
import foto04 from "../imagem/foto04.jpeg";
import foto05 from "../imagem/foto05.jpg";
import foto06 from "../imagem/foto06.webp";

function CardPerfil({ imageSrc, initialLikes = 10, index }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);
  const [isSaved, setIsSaved] = useState(false);

  function handleLike() {
    setIsLiked((prev) => !prev);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  }

  function handleSave() {
    setIsSaved((prev) => !prev);
  }

  return (
    <article className="Card-perfil">
      <header className="lados">
        <img
          src="https://i.pinimg.com/736x/96/b5/1a/96b51a0d98c37f9ade70cbbcfb2c0f0b.jpg"
          className="fotoperfilcard"
          alt="Foto de perfil de Maria Cecilia Nevez"
          width="40"
          height="40"
          loading="lazy"
        />
        <div>
          <h3>Maria Cecilia Nevez</h3>
          <span className="rj">
            <FaLocationDot aria-hidden="true" /> Rio de Janeiro
          </span>
        </div>
        <button type="button" aria-label="Mais opções da publicação" className="btn-icon">
          <FiMoreHorizontal aria-hidden="true" />
        </button>
      </header>

      <img
        src={imageSrc}
        className="Foto-Feed"
        alt={`Publicação do feed ${index + 1}`}
        loading="lazy"
        decoding="async"
      />

      <footer className="lado">
        <button
          type="button"
          onClick={handleLike}
          aria-label={isLiked ? "Descurtir publicação" : "Curtir publicação"}
          className="botao-icones"
        >
          {isLiked ? (
            <IoHeart className="filled" aria-hidden="true" />
          ) : (
            <IoHeartOutline aria-hidden="true" />
          )}
        </button>
        <p>{likeCount}</p>

        <button type="button" aria-label="Comentar" className="btn-icon">
          <IoChatbubbleOutline aria-hidden="true" />
        </button>

        <button type="button" aria-label="Compartilhar" className="btn-icon">
          <RiSendInsLine aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={handleSave}
          aria-label={isSaved ? "Remover dos salvos" : "Salvar publicação"}
          className="botao-icones"
        >
          {isSaved ? (
            <RiBookmarkFill aria-hidden="true" />
          ) : (
            <RiBookmarkLine aria-hidden="true" />
          )}
        </button>
      </footer>
    </article>
  );
}

export default function Perfil() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  function handleFollowToggle() {
    setIsFollowing((prev) => !prev);
  }

  function handleBlockToggle() {
    setIsBlocked((prev) => !prev);
  }

  const posts = [foto01, foto02, foto03, foto04, foto05, foto06];

  const destaques = [
    {
      src: "https://tse2.mm.bing.net/th/id/OIP.JZXvkOB3QQ7ooTYLkzvkKAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      label: "Love",
    },
    {
      src: "https://i.pinimg.com/474x/f8/9d/1d/f89d1dd68ab2e02495e0906c31c144b8.jpg?nii=t",
      label: "Me",
    },
    {
      src: "https://i.pinimg.com/736x/05/39/6f/05396fc7c661eada10047ec67effbee3.jpg",
      label: "Best",
    },
    {
      src: "https://westblock-fotodesign.de/images/hochheimer-markt/hochheimer-markt-024.jpg",
      label: "Place",
    },
  ];

  return (
    <main className="perfil-container">
      <header className="perfil-header">
        <h1>LOGO</h1>

        <section className="perfil-topo">
          <img
            src="https://i.pinimg.com/736x/96/b5/1a/96b51a0d98c37f9ade70cbbcfb2c0f0b.jpg"
            className="fotoperfil"
            alt="Foto de perfil de Maria Cecilia Nevez"
            width="150"
            height="150"
          />

          <div className="perfil-info">
            <h2>Maria cecilia nevez</h2>
            <span className="rj">
              <FaLocationDot aria-hidden="true" /> Rio de Janeiro
            </span>
            <p className="bio">Carpe Diem.</p>
          </div>

          <div className="estatisticas">
            <div>
              <strong>1250</strong>
              <span>seguidores</span>
            </div>
            <div>
              <strong>900</strong>
              <span>seguindo</span>
            </div>
          </div>

          <div className="acoes">
            <button
              type="button"
              className="botao"
              onClick={handleFollowToggle}
              aria-label={isFollowing ? "Deixar de seguir perfil" : "Seguir perfil"}
            >
              {isFollowing ? "Seguindo" : "Seguir"}
            </button>

            <button
              type="button"
              className="botao remover"
              onClick={handleBlockToggle}
              aria-label={isBlocked ? "Desbloquear perfil" : "Bloquear perfil"}
            >
              {isBlocked ? "Bloqueado" : "Bloquear"}
            </button>
          </div>
        </section>
      </header>


      <section className="espaco" aria-label="Destaques do perfil">
        {destaques.map((item, idx) => (
          <div className="central" key={idx}>
            <img
              src={item.src}
              className="destaque"
              alt={`Destaque ${item.label}`}
              loading="lazy"
              width="80"
              height="80"
            />
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      <section className="grid-feed" aria-label="Publicações">
        {posts.map((imgUrl, index) => (
          <CardPerfil key={index} index={index} imageSrc={imgUrl} />
        ))}
      </section>
    </main>
  );
}