import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./styles.css";
import Login from "./Screens/Login";
import AdminDashboard from "./Screens/admin";
import Register from "./Screens/register";
import EditProfile from "./Screens/edit_profile";
import Checkout from "./Screens/Checkoutpage";
import HomePage from "./Screens/homepage.js";
import AddProduct from "./Screens/addproduct";
import Shoppingcart from "./Screens/shopping_cart";
import ProductDescription from "./Screens/productdescription";
import ApproveOrders from "./Screens/approve_prod";
import OrderHistory from "./Screens/orderhistory";
import OrderHistoryAdmin from "./Screens/orderhistory_admin";
import FeedBackBuyer from "./Screens/feedback_buyer";
import OrderDisplay from "./Screens/order_display";
import OrderDisplayAdmin from "./Screens/order_display_admin";
import FeedBackAdmin from "./Screens/feedback_admin";
import OrderStatus from "./Screens/orderstatus";
import Editproduct from "./Screens/edit_product";
import ChangeProduct from "./Screens/change_product";
function App() {
  return (
    <>
      <div className="App" >
        {/* <Route exact path="/" component={EditProfile} /> */}
        <Route exact path="/addproducts" component={AddProduct} />
        <Route exact path="/editprofile" component={EditProfile}/>
        <Route exact path="/editproduct" component={Editproduct}/>
        <Route exact path="/changeproduct/:id" component={ChangeProduct}/>
        <Route exact path="/feedbackadmin" component={FeedBackAdmin}/>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/shoppingcart" component={Shoppingcart} />
        <Route exact path="/pd/:id" component={ProductDescription} />
        <Route exact path="/admin" component={AdminDashboard} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/approve_prod" component={ApproveOrders} />
        <Route exact path="/orderhistory" component={OrderHistory} />
        <Route exact path="/orderhistoryadmin" component={OrderHistoryAdmin} />
        <Route exact path="/feedbuyer" component={FeedBackBuyer} />
        <Route exact path="/items/:id" component={OrderDisplay} />
        <Route exact path="/orderstatus/:id" component={OrderStatus} />
        <Route exact path="/itemsadmin/:id" component={OrderDisplayAdmin} />
      </div>
    </>
  );
}

export default App;
