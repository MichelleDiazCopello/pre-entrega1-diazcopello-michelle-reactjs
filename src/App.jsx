import NavBar from './components/nav-bar/navbar';
import ItemListContainer from './components/item-list-container/item-list-container';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos"} />
    </div>
  );
}

export default App;
