import { Provider } from "react-redux";
import "./App.css";
import Login from "./pages/auth/login/Login";
import Main from "./pages/main/Main";
import Starter from "./pages/starterPage/Starter";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Starter /> */}
        {/* <Login /> */}
        <Main />
      </div>
    </Provider>
  );
}

export default App;
