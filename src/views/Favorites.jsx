import { useContext } from "react";
import { FotosContext } from "../context/ContexFotos";

const Favorites = () => {
  const { fotos, setFotos } = useContext(FotosContext);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4"></div>
    </div>
  );
};
export default Favorites;
