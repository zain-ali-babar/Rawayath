import React, { useState, useEffect } from "react";
//imports for product description page
import "./productDescription.css";
import Logo from "./images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useHistory, useParams } from "react-router-dom";
import { db } from "./fire.js";
import firebase from "firebase";

function ProductDescription({ match }) {
  const history = useHistory();
  let s = match.params.id;
  console.log(s);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [prod, setProd] = useState("");
  const [col1, setCol1] = useState("#504d4d");
  const [col2, setCol2] = useState("#504d4d");
  const [col3, setCol3] = useState("#504d4d");
  const [col4, setCol4] = useState("#504d4d");
  const [enable, setEnable] = useState(false);
  useEffect(() => {
    db.collection("product")
      .doc(s)
      .get()
      .then((snapshot) =>
        setProd({
          description: snapshot.data().description,
          name: snapshot.data().name,
          picture_link: snapshot.data().picture_links,
          price: snapshot.data().price
        })
      );
  });
  console.log(quantity);

  const onMouseDown1 = (e) => {
    setCol1("orange");
    setCol2("#504d4d");
    setCol3("#504d4d");
    setCol4("#504d4d");
  };

  const onMouseDown2 = (e) => {
    setCol1("#504d4d");
    setCol2("orange");
    setCol3("#504d4d");
    setCol4("#504d4d");
  };
  const onMouseDown3 = (e) => {
    setCol1("#504d4d");
    setCol2("#504d4d");
    setCol3("orange");
    setCol4("#504d4d");
  };
  const onMouseDown4 = (e) => {
    setCol1("#504d4d");
    setCol2("#504d4d");
    setCol3("#504d4d");
    setCol4("orange");
  };

  const handleclick = (e) => {
    var user = firebase.auth().currentUser;

    if (user != null) {
      var uid = user.uid;

    var docRef = db.collection("shoppingcart").doc();
    docRef
      .set({
        shopping_id: docRef.id,
        buyer_id: uid,
        product_id: s,
        quantity: quantity,
        color: color,
        size: size,
        name: prod.name,
        price: prod.price,
        show: "yes",
        pic_link:prod.picture_link
      })
      .then(() => {
        alert("Added to shopping cart");
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
    }
    else{
      alert("You need to sign-up to place order")
      history.push('/register')
    }
  };
  const sp = (ev) => {
    ev.preventDefault();
    history.push("/shoppingcart");
  };
  const home = (e) => {
    e.preventDefault();
    return history.push("/");
  };
  return (
    <div className="product-description">
      <div className="header">
        <a href="" className="contact-us-bar">
          Contact Us
        </a>
      </div>
      <div className="title-bar">
        <div className="rawayath-logo" onClick={home}>
          <img style={{ paddingLeft: "3rem" }} src={Logo} width="200rem"></img>
        </div>
        {/* <div className="shoppingcart-button">
          <button onClick={sp}>
            <FaShoppingCart />
          </button>
        </div> */}
      </div>
      <div style={{ backgroundColor: "#504d4d", height: "2px" }}></div>
      <div className="middle-content">
        <div className="product-image-area">
          <div className="scroll-button">
            <FaArrowLeft />
          </div>
          <div className="product-image">
            <img src={prod.picture_link} alt="No Image" />
          </div>
          <div className="scroll-button">
            <FaArrowRight />
          </div>
        </div>
        <div className="product-details">
          <div className="product-name inner-padding">
            <h1>{prod.name}</h1>
          </div>
          <div className="product-price inner-padding">
            <h1>Rs. {prod.price}</h1>
          </div>
          <div className="availability inner-padding">
            <h2>Description:</h2>
            <div>{prod.description}</div>
          </div>
          <div className="product-color inner-padding">
            <h2>Select Color:</h2>
            <select
              name="color"
              id="color"
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
                setEnable(true);
              }}
            >
              <option selected>Select</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
              <option value="White">White</option>
            </select>
          </div>
          <div className="product-size inner-padding">
            <h2>Select Size:</h2>
            <div
              className="size-buttons"
              value={size}
              onClick={(event) => setSize(event.target.value)}
            >
              <button
                className="s"
                type="submit"
                value="S"
                style={{ backgroundColor: col1 }}
                onMouseDown={onMouseDown1}
              >
                S
              </button>
              <button
                className="m"
                type="submit"
                value="M"
                style={{ backgroundColor: col2 }}
                onMouseDown={onMouseDown2}
              >
                M
              </button>
              <button
                className="l"
                type="submit"
                value="L"
                style={{ backgroundColor: col3 }}
                onMouseDown={onMouseDown3}
              >
                L
              </button>
              <button
                className="xl"
                type="submit"
                value="XL"
                style={{ backgroundColor: col4 }}
                onMouseDown={onMouseDown4}
              >
                XL
              </button>
            </div>
          </div>
          <div className="product-quantity inner-padding">
            <h2>Select Quantity:</h2>
            <select
              name="color"
              id="color"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="add-to-cart">
            <button
              onClick={handleclick}
              disabled={!enable}
              style={{ disabled: { backgroundColor: "grey" } }}
            >
               ADD TO CART
            </button>
          </div>
        </div>
      </div>

      {/* <div className="footer">  
        <div className="social-media">
          <div style={{ fontSize: "1rem", padding: "5px" }}>
            BE A PART OF OUR SOCIAL NETWORK
          </div>
            <a href="" style={{ padding: "10px" }}>
              <FaFacebookSquare style={{ color: "#504d4d" }} />
            </a>
            <a href="" style={{ padding: "10px" }}>
              <FaInstagram style={{ color: "#504d4d" }} />
            </a>
          </div>
          <div className="footer-bar">
            <a href="" style={{ padding: "10px" }}>
              <FaRegClock style={{ color: "white", padding: "3px" }} />
              <span
                style={{
                  color: "white",
                  padding: "0em 0em 6em 0em",
                  textDecoration: "none"
                }}
              >
                {" "}
                Support 24/7
              </span>
            </a>

            <a href="" style={{ padding: "10px" }}>
              <FaMapMarkerAlt style={{ color: "white", padding: "3px" }} />
              <span
                style={{
                  color: "white",
                  padding: "0em 0em 6em 0em",
                  textDecoration: "none"
                }}
              >
                {" "}
                Track your order
              </span>
            </a>
          </div>
        </div> */}
    </div>
  );
}

export default ProductDescription;
