import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./styles.css";
import Login from "./Screens/Login";
import AdminDashboard from "./Screens/admin";
import Register from "./Screens/register";
import EditProfile from "./Screens/edit_profile_buyer";
import Checkout from "./Screens/Checkoutpage";
import HomePage from "./Screens/homepage.js";
import AddProduct from "./Screens/addproduct";
import Shoppingcart from "./Screens/shopping_cart";
import ProductDescription from "./Screens/productdescription";
import ApproveOrders from "./Screens/approve_prod";
function App() {
  return (
    <>
      <div className="App">
        {/* <Route exact path="/" component={EditProfile} /> */}
        <Route exact path="/addproducts" component={AddProduct} />

        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/shoppingcart" component={Shoppingcart} />
        <Route exact path="/pd/:id" component={ProductDescription} />
        <Route exact path="/admin" component={AdminDashboard} />
        <Route exact path="/register" component={Register} />
      </div>
    </>
  );
}

export default App;
