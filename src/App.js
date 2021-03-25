

import { BrowserRouter,Route, Switch, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./styles.css";
import Register from "./Screens/register";
function App() {
  return (
    
    <div className="App">
      <Route path="/" component={Register} />
    </div>
    
    
  );
}

export default App;
