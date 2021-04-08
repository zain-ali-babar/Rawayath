

import { BrowserRouter,Route, Switch, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./styles.css";
import Login from "./Screens/Login";
import AdminDashboard from "./Screens/admin";
import Register from "./Screens/register";
import EditProfile from "./Screens/edit_profile_buyer";
function App() {
  return (
    <>
    <div className="App">
      <Route exact path="/" component={EditProfile} />
      {/* <Route exact path="/" component={Login} /> */}
      <Route exact path="/admin" component={AdminDashboard} />
      <Route exact path="/register" component={Register} />
    </div>
    </>
    
  );
}

export default App;
