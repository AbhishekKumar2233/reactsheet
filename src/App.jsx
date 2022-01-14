import "./styles.css";
import List from "./List";

const Ctype = "Indian";
const type = "food";

export default function App() {
  return (
    <div className="App">
      <h1 contentEditable="true" spellCheck="true">
        My Favourite {Ctype} {type}
      </h1>
      {/* <h1>My Favourite {`${Ctype} ${type}`}</h1> */}
      {/*Es6 */}
      <List />
      <p>Rendom number {Math.floor(Math.random() * 10)}</p>
    </div>
  );
}
