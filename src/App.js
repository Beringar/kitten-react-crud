import KittenList from "./components/KittenList/KittenList";
import NewKitty from "./components/NewKitty/NewKitty";

function App() {
  return (
    <div className="container">
      <h1>Super Powerful Kitten App</h1>
      <section className="new-kitty">
        <NewKitty />
      </section>
      <section className="kitten-list">
        <KittenList />
      </section>
    </div>
  );
}

export default App;
