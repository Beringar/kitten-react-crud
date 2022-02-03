import { useState } from "react";
import "./NewKitty.css";
import KittenContext from "../contexts/KittenContext";
import { useContext } from "react";

const NewKitty = () => {
  const { addKitty } = useContext(KittenContext);
  const initialFormData = Object.freeze({
    name: "",
    picture: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addKitty(formData);
    console.log(formData);
  };

  return (
    <>
      <h2>New kitty</h2>
      <form className="form-kitty">
        <div className="form-block">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" onChange={handleChange} />
        </div>
        <div className="form-block">
          <label htmlFor="picture">Picture: </label>
          <input
            type="url"
            name="picture"
            id="picture"
            onChange={handleChange}
          />
        </div>
        <div className="form-block">
          <button type="submit" className="button" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </form>
    </>
  );
};

export default NewKitty;
