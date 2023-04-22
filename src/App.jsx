import { Provider } from "react-redux";
import store from "./store";
import { increment, decrement, incrementByValue } from "./actions";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Contador: {store.getState().count}</h1>
        <button onClick={() => store.dispatch(increment())}>Incrementar</button>
        <button onClick={() => store.dispatch(decrement())}>Decrementar</button>
        <button onClick={() => store.dispatch(incrementByValue(5))}>Incrementar en 5</button>
      </div>
    </Provider>
  );
}

export default App;

