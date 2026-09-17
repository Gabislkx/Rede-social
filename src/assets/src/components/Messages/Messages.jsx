import { useState } from "react";
import { FaRegPaperPlane, FaRegEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./Messages.css";

function Messages() {
  const [mostrarMensagens, setMostrarMensagens] = useState(false);

  return (
    <>
      <button
        className="messages-button"
        onClick={() => setMostrarMensagens(!mostrarMensagens)}
      >
        <FaRegPaperPlane />
        <span>Mensagem</span>
      </button>

      {mostrarMensagens && (
        <div className="messages-panel">
          <div className="messages-header">
            <h2>Mensagens</h2>

            <button onClick={() => setMostrarMensagens(false)}>
              <IoClose />
            </button>
          </div>

          <div className="messages-list">
            <div className="message-item">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
                alt="Foto de Code & Coffee"
              />

              <div className="message-info">
                <strong>dev_lifestyle</strong>
                <span>Você viu o projeto novo? · 5 min</span>
              </div>
            </div>

            <div className="message-item">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
                alt="Foto de Lucas pelo Mundo"
              />

              <div className="message-info">
                <strong>travel_vibes</strong>
                <span>Essa viagem foi incrível! · 2 h</span>
              </div>
            </div>

            <div className="message-item">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
                alt="Foto de Design Tricks"
              />

              <div className="message-info">
                <strong>uiux_daily</strong>
                <span>Olha essa ideia de layout 👀 · 1 d</span>
              </div>
            </div>
          </div>
          <button className="new-message">
            <FaRegEdit />
          </button>
        </div>
      )}
    </>
  );
}

export default Messages;
