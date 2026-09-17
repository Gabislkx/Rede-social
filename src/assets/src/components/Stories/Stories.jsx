import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Stories.css";

function Stories({ posts }) {
  const storiesRef = useRef(null);
  const [inicio, setInicio] = useState(true);
  const [fim, setFim] = useState(false);

  const verificarScroll = () => {
    const elemento = storiesRef.current;
    setInicio(elemento.scrollLeft <= 0);
    setFim(
      elemento.scrollLeft + elemento.clientWidth >= elemento.scrollWidth - 1,
    );
  };

  return (
    <div className="stories-container">
      <button
        className="stories-prev"
        style={{ visibility: inicio ? "hidden" : "visible" }}
        onClick={() => {
          storiesRef.current.scrollBy({
            left: -250,
            behavior: "smooth",
          });
        }}
      >
        <FaChevronLeft />
      </button>

      <section className="stories" ref={storiesRef} onScroll={verificarScroll}>
        {posts.map((post) => (
          <div className="story" key={post.id}>
            <div className="story-borda">
              <img
                src={post.usuario.avatar}
                alt={`Foto de ${post.usuario.nome}`}
              />
            </div>

            <span>{post.usuario.username}</span>
          </div>
        ))}
      </section>

      <button
        className="stories-next"
        style={{ visibility: fim ? "hidden" : "visible" }}
        onClick={() => {
          storiesRef.current.scrollBy({
            left: 250,
            behavior: "smooth",
          });
        }}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Stories;
