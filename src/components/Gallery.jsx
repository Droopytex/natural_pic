import { FotosContext } from "../context/ContexFotos";
import { useContext } from "react";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { fotos, setFotos } = useContext(FotosContext);
  return (
    <div className="gallery grid-columns-5 p-3">
      {fotos.map((fotos, index) => (
        <div
          className="contenedor_foto pb-2"
          style={{ backgroundImage: `url(${fotos.src.tiny})` }}
          key={index}
        >
          <IconHeart filled={fotos.liked} />

          <p className="texto_fotos m-0">{fotos.alt}</p>
        </div>
      ))}
    </div>
  );
};
export default Gallery;
