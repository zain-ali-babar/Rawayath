import react from 'react'

//imports for product description page
import './frontend/styles/productDescription.css'
import Logo from './images/logo.png'
import {FaShoppingCart} from "react-icons/fa"
import {FaArrowLeft} from "react-icons/fa"
import {FaArrowRight} from "react-icons/fa"


function ProductDescription(){
    return(
      <div className= "product-description">
        <div className="header">
          <a href="" className="contact-us-bar">
            Contact Us
          </a>
        </div>
        <div className="title-bar">
          <div className="rawayath-logo">
            <img style = {{paddingLeft: "3rem"}}src={Logo} width="200rem"></img>
          </div>
          <div className="shoppingcart-button">
            <button>
              <FaShoppingCart/>
            </button>
          </div>
        </div>
        <div style={{backgroundColor: "#504d4d", height:"2px"}}></div>
        <div className="middle-content">
          <div className="product-image-area">
            <div className="scroll-button">
              <FaArrowLeft/>
            </div>
            <div className="product-image">
              <img src="https://i.pinimg.com/236x/f6/46/8d/f6468d1d0bb282073b9b21256490e5c0.jpg" alt="No Image" />
            </div>
            <div className="scroll-button">
              <FaArrowRight/>
            </div>
          </div>
          <div className="product-details">
            <div className="product-name inner-padding">
              <h1>Name of Suit</h1>
            </div>
            <div className="product-price inner-padding">
              <h1>Rs. 4000</h1>
            </div>
            <div className="availability inner-padding">
              <h2>(In Stock)</h2>
            </div>
            <div className="product-color inner-padding">
              <h2>Select Color:</h2>
              <select name="color" id="color">
                <option value="color1">color1</option>
                <option value="color2">color2</option>
                <option value="color3">color3</option>
                <option value="color4">color4</option>
                <option value="color5">color5</option>
              </select>
            </div>
            <div className="product-size inner-padding">
              <h2>Select Size:</h2>
              <div className="size-buttons">
                <button className="xs">XS</button>
                <button className="s">S</button>
                <button className="m">M</button>
                <button className="l">L</button>
                <button className="xl">XL</button>
              </div>
            </div>
            <div className="product-quantity inner-padding">
              <h2>Select Quantity:</h2>
              <select name="color" id="color">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="add-to-cart">
              <button >
                ADD TO CART
              </button>
            </div>
          </div>

        </div>





        <div className="footer">  
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
        </div>
      </div>
    );
  }

  export default ProductDescription