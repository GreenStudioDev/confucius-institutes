import { useContext } from "react";
import { mapContext } from "../context";
import "../App.css";

export const NavigateButton = () => {
//   const { institutesMap } = useMap();
const { map } = useContext(mapContext)

let mapZoom = ( ) => {
  if (window.innerWidth <= 500) {
    return (2.28)
 } else return (3.18)
}

  const onClick = () => {
    map.flyTo({
      center: [-62.546, -33.127],
      zoom: mapZoom(),
      pitch: 63,
      bearing: -10,
    });
  };

  return <button className="home-button" onClick={onClick}>Return</button>;
};
