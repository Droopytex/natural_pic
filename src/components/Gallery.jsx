import { FotosContext } from "../context/ContexFotos";
import { useContext } from "react";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { fotos, setFotos } = useContext(FotosContext);

  const darLike = (index) => {
    const newFotos = [...fotos];
    newFotos[index].liked = !newFotos[index].liked;
    setFotos(newFotos);
  };

  return (
    <div className="gallery grid-columns-5">
      {fotos.map((fotos, index) => (
        <div
          className="contenedor_foto pb-2"
          style={{ backgroundImage: `url(${fotos.src.tiny})` }}
          key={index}
        >
          <IconHeart filled={fotos.liked} onClick={() => darLike(index)} />

          <p className="texto_fotos bg-light">{fotos.alt}</p>
        </div>
      ))}
    </div>
  );
};
export default Gallery;
