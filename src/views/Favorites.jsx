import { useContext } from "react";
import { FotosContext } from "../context/ContexFotos";

const Favorites = () => {
  const { fotos, setFotos } = useContext(FotosContext);

  const fotosFavoritas = fotos.filter((foto) => foto.liked);

  const darLike = (index) => {
    const newFotos = [...fotos];
    newFotos[index].liked = !newFotos[index].liked;
    setFotos(newFotos);
  };

  return (
    <div>
      <h1>Fotos favoritas</h1>

      <div className="p-3 gallery grid-columns-4">
        {fotosFavoritas.map((fotos, index) => (
          <div
            className="contenedor_foto pb-2"
            style={{ backgroundImage: `url(${fotos.src.tiny})` }}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Favorites;
