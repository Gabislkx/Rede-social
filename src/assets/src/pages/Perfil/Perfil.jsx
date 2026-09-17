import React, { useState } from "react";
import "./Perfil.css";

import { FiMoreHorizontal } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { IoHeart, IoHeartOutline, IoChatbubbleOutline } from "react-icons/io5";
import { RiSendInsLine, RiBookmarkFill, RiBookmarkLine } from "react-icons/ri";

function CardPerfil({ imageSrc, initialLikes = 10 }) {
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
    <div className="Card-perfil">
      <div className="lados">
        <img
          src="https://i.pinimg.com/736x/96/b5/1a/96b51a0d98c37f9ade70cbbcfb2c0f0b.jpg"
          className="fotoperfilcard"
          alt="Avatar"
        />
        <div>
          <p>Maria Cecilia Nevez</p>
          <span className="rj">
            <FaLocationDot /> Rio de Janeiro
          </span>
        </div>
        <FiMoreHorizontal />
      </div>

      <img src={imageSrc} className="Foto-Feed" alt="Post" />

      <div className="lado">
        {isLiked ? (
          <IoHeart onClick={handleLike} className="filled" />
        ) : (
          <IoHeartOutline onClick={handleLike} />
        )}
        <p>{likeCount}</p>

        <IoChatbubbleOutline />
        <p></p>

        <RiSendInsLine />

        {isSaved ? (
          <RiBookmarkFill onClick={handleSave} />
        ) : (
          <RiBookmarkLine onClick={handleSave} />
        )}
      </div>
    </div>
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

  const posts = [
    "https://i.pinimg.com/236x/7f/ff/62/7fff62c5465a13413173ef4a5a669dce.jpg",
    "https://i.pinimg.com/736x/89/6d/db/896ddbff3020b153d0934f68fd2c640c.jpg",
    "https://i.pinimg.com/originals/8b/c5/9e/8bc59e859d00d7081eb343a85e3614f2.jpg",
    "https://historiasdeanimais.com.br/wp-content/uploads/2022/12/1.jpeg",
    "https://i.pinimg.com/736x/20/b4/67/20b46774cde1e9d04a06fd3d8f154c28.jpg",
    "https://preview.redd.it/is-my-cat-koko-a-maine-coon-we-were-told-so-some-years-ago-v0-wgf7h5bvlac91.jpg?width=1080&crop=smart&auto=webp&s=a4e75644066412604a8cdbfb0ccdf1d314fbe563",
  ];

  return (
    <div>
      <h1>LOGO</h1>

      <div className="perfil-topo">
        <img
          src="https://i.pinimg.com/736x/96/b5/1a/96b51a0d98c37f9ade70cbbcfb2c0f0b.jpg"
          className="fotoperfil"
          alt="Perfil"
        />

        <div className="perfil-info">
          <h2>Maria cecilia nevez</h2>

          <span className="rj">
            <FaLocationDot /> Rio de Janeiro
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
          <button className="botao" onClick={handleFollowToggle}>
            {isFollowing ? "Seguindo" : "Seguir"}
          </button>

          <button className="botao remover" onClick={handleBlockToggle}>
            {isBlocked ? "Bloqueado" : "Bloquear"}
          </button>
        </div>
      </div>
      <br />
      <br />

      <div className="espaco">
        <div className="central">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.JZXvkOB3QQ7ooTYLkzvkKAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            className="destaque"
            alt="Destaque"
          />
          <p>Love</p>
        </div>

        <div className="central">
          <img
            src="https://i.pinimg.com/474x/f8/9d/1d/f89d1dd68ab2e02495e0906c31c144b8.jpg?nii=t"
            className="destaque"
            alt="Destaque"
          />
          <p>Me</p>
        </div>

        <div className="central">
          <img
            src="https://i.pinimg.com/736x/05/39/6f/05396fc7c661eada10047ec67effbee3.jpg"
            className="destaque"
            alt="Destaque"
          />
          <p>Best</p>
        </div>

        <div className="central">
          <img
            src="https://westblock-fotodesign.de/images/hochheimer-markt/hochheimer-markt-024.jpg"
            className="destaque"
            alt="Destaque"
          />
          <p>Place</p>
        </div>
      </div>

      <br />
      <br />

      <div className="grid-feed">
        {posts.map((imgUrl, index) => (
          <CardPerfil key={index} imageSrc={imgUrl} />
        ))}
      </div>
    </div>
  );
}
