import "./styles.css";

const Ctype = "Indian";
const type = "food";

export default function App() {
  return (
    <div className="App">
      <h1>
        My Favourite {Ctype} {type}
      </h1>
      <h1>My Favourite {`${Ctype} ${type}`}</h1>
      {/*Es6 */}
      <ul>
        <li>Indian</li>
        <li>burger</li>
        <li>fruit</li>
        <li>noodles</li>
      </ul>
      <p>Rendom number {Math.floor(Math.random() * 10)}</p>
    </div>
  );
}
