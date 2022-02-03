import { useState } from "react";
import KittenContext from "./KittenContext";
import kittenJson from "../../data/kitten.json";

const KittenContextProvider = ({ children }) => {
  const kittenAPI = kittenJson;
  const [kitten, setKitten] = useState(kittenAPI);

  // TODO: afegir id
  const addKitty = (newKitty) => {
    const newItem = { ...newKitty, id: kitten[kitten.length - 1].id + 1 };
    setKitten([...kitten, newItem]);
  };

  const removeKitty = (kittyId) => {
    setKitten(kitten.filter(({ id }) => id !== kittyId));
  };

  const adoptKitty = (kittyId) => {
    setKitten(
      kitten.map((kitty) => {
        if (kitty.id === kittyId) {
          kitty.adopted = !kitty.adopted;
        }
        return kitty;
      })
    );
  };

  return (
    <KittenContext.Provider
      value={{
        addKitty,
        removeKitty,
        adoptKitty,
        kitten,
      }}
    >
      {children}
    </KittenContext.Provider>
  );
};

export default KittenContextProvider;
