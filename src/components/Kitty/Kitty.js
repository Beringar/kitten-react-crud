import "./Kitty.css";

const Kitty = ({ kitty, actionAdopt, actionRemove }) => {
  return (
    <li className="kitty">
      <h3 className="kitty__name">{kitty.name}</h3>
      <span className="kitty__status">
        <a
          href="toggle-adopted"
          onClick={(event) => {
            event.preventDefault();
            actionAdopt(kitty.id);
          }}
        >
          {`${kitty.adopted ? "(adopted)" : "Adopt me!!"}`}
        </a>
      </span>
      <img src={kitty.picture} alt={kitty.name} className="kitty__picture" />
      {kitty.adopted && <i className="kitty__adopted">❤</i>}
      <a
        className="kitty__delete"
        href="delete"
        onClick={(event) => {
          event.preventDefault();
          actionRemove(kitty.id);
        }}
      >
        ❌
      </a>
    </li>
  );
};

export default Kitty;
