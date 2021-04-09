
import React, { useState, useEffect } from "react";
// imports for adding a product 
import './addProduct.css'
import Logo from './images/logo.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
import 'firebase/storage';
import {db} from "./fire.js";
import firebase from "firebase";


function AddProduct(){
  const storage = firebase.storage()
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  

 
 
  function handleChange(e) {
    setFile(e.target.files[0]);
    console.log(e.target.files[0].name);
  }

  function handleUpload(e) {
    e.preventDefault();
    const uploadTask = storage.ref(`/images/${file.name}`).put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("images")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          setFile(null);
          setURL(url);
          console.log(url);

          var docRef=db.collection('product').doc()
          docRef.set({
            product_id:docRef.id,
            name:name,
            price:price,
            picture_links:url,
            description:description
            
        }).then(()=>{
          alert("Product Created")
            
        }).catch(error=>{
            alert(error.message)
        })
        
        

        });
    });
  }

  

  function Pic (){
  
    return(
      <div>
      <form onSubmit={handleUpload} >
        <input type="file"  onChange={handleChange}/>
        
        <button disabled={!file}>upload</button>
      </form>
      
    </div>
    
    );
    }
    



    return(
      <div className="add-product">
        <div className="header">
          <a href="" className="contact-us-bar">
            Contact Us
          </a>
        </div>
        <div className="title-bar">
          <div className="rawayath-logo">
            <img style = {{paddingLeft: "3rem"}}src={Logo} width="200rem"></img>
          </div>
          <div className="page-title">
            <h1>add a new product</h1>
          </div>
        </div>
        <div style={{backgroundColor: "#504d4d", height:"2px"}}></div>
        <div className='middle-content'>
          <div className="product-name">
            <div>
              Name<span style={{color: 'red'}} >*</span>
            </div>
            <div>
              <input
              value={name}
            onChange={event =>setName(event.target.value)}></input>
            </div>
          </div>
          <div className="product-price">
            <div>
              Price<span style={{color: 'red'}} >*</span>
            </div>
            <div>
              <input 
            value={price}
            onChange={event =>setPrice(event.target.value)}></input>
            </div>
          </div>
          {/* <div className='product-stock'>
            <div>
              Stock<span style={{color: 'red'}} >*</span>
            </div>
             <div className='stock-content-area'>
              <div className='stock-content-head'>
                <div>Size</div>
                <div>Color</div>
                <div>Quantity</div>
              </div>
              <div className='stock-content'>
                <div style={{textAlign: 'center', backgroundColor: '#504d4d', color: 'white'}}>
                {'XS'}
                </div>
                <input></input>
                <input></input>
              </div>
              <div className='stock-content'>
                <div style={{textAlign: 'center', backgroundColor: '#504d4d', color: 'white'}}>
                {' S'}
                </div>
                <input></input>
                <input></input>
              </div>
              <div className='stock-content'>
                <div style={{textAlign: 'center', backgroundColor: '#504d4d', color: 'white'}}>
                {' M'}
                </div>
                <input></input>
                <input></input>
              </div>
              <div className='stock-content'>
                <div style={{textAlign: 'center', backgroundColor: '#504d4d', color: 'white'}}>
                {' L'}
                </div>
                <input></input>
                <input></input>
              </div>
              <div className='stock-content'>
                <div style={{textAlign: 'center', backgroundColor: '#504d4d', color: 'white'}}>
                  {'XL'}
                </div>
                <input></input>
                <input></input>
              </div>
              <div></div>
            </div> 
          </div> */}
          <div className="description">
            <div>
              Description<span style={{color: 'red'}} >*</span>
            </div>
            <div>
            <textarea 
            value={description}
            onChange={event =>setDescription(event.target.value)}
          ></textarea>
            </div>

          </div>
          <div>
            <span style={{fontWeight:'bold', width: '50%'}}>Note:</span> Colors available for the given size should be written sperated by commas. Quantitites of each color should be written in the same order as the colors.
          </div>
          <div className = 'product-pictures'>
            <div>
              Pictures<span style={{color: 'red'}} >*</span>
              
            </div>
            <Pic/>
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



export default AddProduct