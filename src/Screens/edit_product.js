import React, { useState, useEffect } from "react";
// imports for adding a product 
import './edit_product.css'
import Logo from './images/logo.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import 'firebase/storage';
import { useHistory,useParams } from "react-router-dom";
import {db} from "./fire.js";
import firebase from "firebase";
import Grid from "@material-ui/core/Grid";
import logo from "./images/logo.png";

function Editproduct(){
  const history=useHistory();
    const [product,setProduct]= React.useState([])
    useEffect(() => {
        db.collection("product").onSnapshot((snapshot) => {
          setProduct(
            snapshot.docs.map((doc) => ({
              description: doc.data().description,
              name: doc.data().name,
              picture_link: doc.data().picture_links,
              price: doc.data().price,
              product_id: doc.data().product_id,
              show:doc.data().show
            }))
          );
        });
      }, []);
    return (
        <div className="ep">
          <div className="website_headerep">
            <div>
              <a className="contact_buttonep" href="https://www.google.com/">
                CONTACT US
              </a>
            </div>
          </div>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <a className="rawayath_logoep"  onClick={() => {
                  return history.push('/admin')
                }} href="">
                <img src={logo} alt="Image of logo" width="100" height="50"></img>
              </a>
            </Grid>
            <Grid item xs={4}>
              <div className="page_titleep">View Products</div>
            </Grid>
          </Grid>
            
        <div className="middle_contentep">
            {product.map((product1,index)=>
            {
              if(product1.show=="yes")
              {
                return(
                    <div className="outlineep">
                        <div className="product_nameep">
                            {product1.name}
                        </div>
                        
                    <select classname="selectep1"
                    // class="form-select form-select-lg mb-3"
                    // aria-label=".form-select-lg example"
                    onChange={(event) => 
                      {
                        if(event.target.value=='no'){db.collection('product').doc(product1.product_id).update(
                        {
                          show:(event.target.value)
                        }
                        )}
                        else if (event.target.value=='edit'){
                          return history.push("/changeproduct/"+product1.product_id)
                        }
                      } 
                    }
                    >
                    <option className="options">Options</option>
                    <option className="options" value="edit">Edit</option>
                    <option className="options" value="no">Delete</option>
                  </select>
                <div></div>
                  <div className="product_imageep">
                    <img src={product1.picture_link} alt="No Image" />
                    </div>
                    </div>
              
                 );
                }
            })}
      </div>
          <div className="footerep">
            <div style={{ fontSize: "0.5em", padding: "5px" }}>
            BE A PART OF OUR SOCIAL NETWORK
            </div>
        <div className="social_mediaep">
          <a href="" style={{ padding: "10px" }}>
            <FaFacebookSquare style={{ color: "#504d4d" }} />
          </a>
          <a href="" style={{ padding: "10px" }}>
            <FaInstagram style={{ color: "#504d4d" }} />
          </a>
        </div>
        <div className="footer_barep">
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
export default Editproduct;