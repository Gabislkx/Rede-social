import React, { useState, useEffect, memo } from "react";
import "./Perfil.css";

import { 
  MoreHorizontal, 
  MapPin, 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark 
} from "lucide-react";

import logoImg from "../../2.png"; 
import foto01 from "../imagem/foto01.jpg"; 
import foto02 from "../imagem/foto02.jpg";
import foto03 from "../imagem/foto03.jpg";
import foto04 from "../imagem/foto04.jpeg";
import foto05 from "../imagem/foto05.jpg";
import foto06 from "../imagem/foto06.webp";


const CardPerfil = memo(function CardPerfil({ imageSrc, initialLikes = 10, index }) {
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
          decoding="async"
        />
        <div>
          <h3>Maria Cecilia Nevez</h3>
          <span className="rj">
            <MapPin size={14} aria-hidden="true" /> Rio de Janeiro
          </span>
        </div>
        <button type="button" aria-label="Mais opções da publicação" className="btn-icon">
          <MoreHorizontal size={20} aria-hidden="true" />
        </button>
      </header>

      <img
        src={imageSrc}
        className="Foto-Feed"
        alt={`Publicação do feed ${index + 1}`}
        width="600"
        height="600"
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
          <Heart
            size={22}
            className={isLiked ? "filled" : ""}
            fill={isLiked ? "currentColor" : "none"}
            aria-hidden="true"
          />
        </button>
        <p>{likeCount}</p>

        <button type="button" aria-label="Comentar" className="btn-icon">
          <MessageCircle size={22} aria-hidden="true" />
        </button>

        <button type="button" aria-label="Compartilhar" className="btn-icon">
          <Send size={22} aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={handleSave}
          aria-label={isSaved ? "Remover dos salvos" : "Salvar publicação"}
          className="botao-icones"
        >
          <Bookmark
            size={22}
            className={isSaved ? "filled" : ""}
            fill={isSaved ? "currentColor" : "none"}
            aria-hidden="true"
          />
        </button>
      </footer>
    </article>
  );
});

export default function Perfil() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    document.title = "Maria Cecilia Nevez (@mariacecilia) • Nox Social";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      "Confira as últimas fotos e publicações de Maria Cecilia Nevez no Nox Social. Veja destaques, fotos do Rio de Janeiro e interaja com o perfil.";
  }, []);

  function handleFollowToggle() {
    setIsFollowing((prev) => !prev);
  }

  function handleBlockToggle() {
    setIsBlocked((prev) => !prev);
  }

  const posts = [foto01, foto02, foto03, foto04, foto05, foto06];

  const destaques = [
    {
      id: "destaque-love",
      src: "https://tse2.mm.bing.net/th/id/OIP.JZXvkOB3QQ7ooTYLkzvkKAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      label: "Love",
    },
    {
      id: "destaque-me",
      src: "https://i.pinimg.com/474x/f8/9d/1d/f89d1dd68ab2e02495e0906c31c144b8.jpg?nii=t",
      label: "Me",
    },
    {
      id: "destaque-best",
      src: "https://i.pinimg.com/736x/05/39/6f/05396fc7c661eada10047ec67effbee3.jpg",
      label: "Best",
    },
    {
      id: "destaque-place",
      src: "https://westblock-fotodesign.de/images/hochheimer-markt/hochheimer-markt-024.jpg",
      label: "Place",
    },
  ];

  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Maria Cecilia Nevez",
      "alternateName": "@mariacecilia",
      "description": "Carpe Diem.",
      "image": "https://i.pinimg.com/736x/96/b5/1a/96b51a0d98c37f9ade70cbbcfb2c0f0b.jpg",
      "interactionStatistic": [
        {
          "@type": "InteractionCounter",
          "interactionType": "https://schema.org/FollowAction",
          "userInteractionCount": 1250
        }
      ]
    }
  };

  return (
    <main className="perfil-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />

      <header className="perfil-header">
        <h1>
          <img src={logoImg} alt="Nox Social" className="logo" width="120" height="40" />
        </h1>

        <section className="perfil-topo" aria-label="Informações do perfil">
          <img
            src="https://i.pinimg.com/736x/96/b5/1a/96b51a0d98c37f9ade70cbbcfb2c0f0b.jpg"
            className="fotoperfil"
            alt="Foto de perfil de Maria Cecilia Nevez"
            width="150"
            height="150"
            decoding="async"
          />

          <div className="perfil-info">
            <h2>Maria Cecilia Nevez</h2>
            <span className="rj">
              <MapPin size={14} aria-hidden="true" /> Rio de Janeiro
            </span>
            <p className="bio">Carpe Diem.</p>
          </div>

          <div className="estatisticas" aria-label="Estatísticas do usuário">
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
        {destaques.map((item) => (
          <div className="central" key={item.id}>
            <img
              src={item.src}
              className="destaque"
              alt={`Destaque ${item.label}`}
              loading="lazy"
              decoding="async"
              width="80"
              height="80"
            />
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      <section className="grid-feed" aria-label="Publicações do feed">
        {posts.map((imgUrl, index) => (
          <CardPerfil key={`post-${index}`} index={index} imageSrc={imgUrl} />
        ))}
      </section>
    </main>
  );
}