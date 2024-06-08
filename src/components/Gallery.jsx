import { FotosContext } from "../context/ContexFotos";
import { useContext } from "react";

const Gallery = () => {
  const { fotos } = useContext(FotosContext);
  return (
    <div className="gallery grid-columns-5 p-3">
      {fotos.map((fotos, index) => (
        <div className="contenedor_foto pb-2" key={index}>
          <img className="la_foto" src={fotos.src.tiny} alt="" />
          <p className="m-0">{fotos.alt}</p>
          <p>{fotos.liked}</p>
        </div>
      ))}
    </div>
  );
};
export default Gallery;
