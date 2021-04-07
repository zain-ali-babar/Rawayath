

import { BrowserRouter,Route, Switch, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./styles.css";
import Register from "./Screens/register";
import Login from "./Screens/Login";
import Shoppingcart from "./Screens/shopping-cart";
function App() {
  return (
    
    <div className="App">
      <Route path="/" component={Shoppingcart} />
    </div>
    
    
  );
}

export default App;
