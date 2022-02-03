import Kitty from "../Kitty/Kitty";
import "./KittenList.css";
import KittenContext from "../contexts/KittenContext";
import { useContext } from "react";

const KittenList = () => {
  const { kitten, adoptKitty, removeKitty } = useContext(KittenContext);

  return (
    <>
      <h2>Kitten list</h2>
      <ul className="kitten">
        {kitten.map((kitty) => (
          <Kitty
            kitty={kitty}
            key={kitty.id}
            actionAdopt={adoptKitty}
            actionRemove={removeKitty}
          />
        ))}
      </ul>
    </>
  );
};

export default KittenList;
