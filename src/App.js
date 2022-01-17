import './App.css';
import Controls from './containers/Controls';
import Grid from './containers/Grid';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
import { createStore } from 'redux';
import { Game } from './styles/componentStyles';

const store = createStore(reducer);
function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Game id='majorContainer'>
          <h1>Melody of ours</h1>
          <p>Dibuja lo primero que se te pase por la cabeza:</p>
          <Grid id="gridContainer" />
          <Controls />
        </Game>
      </Provider>
    </div>
  );
}


export default App;
