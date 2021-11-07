import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Provider } from "react-redux";

// import store from "./store";
import Bathtub from "./components/bathtub";

function App() {
  return (
    // <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Bathtub} />
      </Switch>
    </Router>
    // </Provider>
  );
}

export default App;
