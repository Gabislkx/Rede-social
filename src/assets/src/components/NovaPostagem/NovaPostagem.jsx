import { IoClose } from "react-icons/io5";
import { FaPaperclip } from "react-icons/fa";
import "./NovaPostagem.css";

function NovaPostagem({ setMostrarPostagem }) {
  return (
    <div className="modal-postagem">
      <div className="conteudo-postagem">
        <button
          className="fechar-postagem"
          onClick={() => setMostrarPostagem(false)}
        >
          <IoClose />
        </button>

        <h2>Nova postagem</h2>

        <div className="selecionar-imagem">
          <button>
            <FaPaperclip />
            Selecionar imagem
          </button>
        </div>

        <div className="campo-legenda">
          <textarea placeholder="Escreva uma legenda..."></textarea>
        </div>

        <button className="publicar-postagem">Publicar</button>
      </div>
    </div>
  );
}

export default NovaPostagem;
