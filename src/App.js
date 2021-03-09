import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/main";
import RestaurantDashboard from "./components/dashboard/restaurantDashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        {/* <Route exact path="/main/dashboard" component={RestaurantDashboard} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
