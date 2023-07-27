import { Provider } from "react-native";
import CounterApp from "./components/CounterApp";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <CounterApp />
      </Provider>
  );
}

export default App;


