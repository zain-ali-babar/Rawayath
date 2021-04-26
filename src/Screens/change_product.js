import React, { useState, useEffect } from "react";
// imports for adding a product 
import './change_product.css'
import Logo from './images/logo.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";
// import Uploady from "@rpldy/uploady";
// import UploadButton from "@rpldy/upload-button";
// import UploadPreview from "@rpldy/upload-preview";
import 'firebase/storage';
import {db} from "./fire.js";
import firebase from "firebase";

function ChangeProduct({match}){
    let s=match.params.id;
    const history = useHistory("");
    const storage = firebase.storage()
    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [product,setProduct] = useState([]);
    const [update,setUpdate] = useState('true')
    useEffect(()=>{
        // db.collection('product').doc(s).get().then
        // (snapshot=>setProduct({description:snapshot.data().description,
        // name:snapshot.data().name,
        // picture_link:snapshot.data().picture_links,
        // price:snapshot.data().price}))
        
        db.collection("product").where("product_id", "==",s).onSnapshot(snapshot =>{
          setProduct(snapshot.docs.map(doc=> ({name: doc.data().name , price: doc.data().price, picture_link:doc.data().picture_links, description:doc.data().description})))
      
        })
      })
      // console.log
      
      if(update=='true' && product.length!=0){
        setName(product[0].name)
        setPrice(product[0].price)
        setDescription(product[0].description)
        setUpdate("false")
        console.log("update done")
        console.log(product)
        console.log(s)
      }

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
              docRef.update({
                product_id:"0XRfDVjA1pFcF78NJFCw",
                name:name,
                price:price,
                picture_links:url,
                description:description
                
            }).then(()=>{
              alert("Product Changed")
                
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
      product.length==0?<div>LOADING</div>:
        <div className="add-product_cp">
            <div className="header_cp">
                <a href="" className="contact-us-bar">
                    Contact Us
                </a>
            </div>
            <div className="title-bar_cp">
                <div onClick={() => {
                  return history.push('/admin')
                }} className="rawayath-logo_cp">
                    <img style = {{paddingLeft: "3rem"}}src={Logo} width="80rem"></img>
            </div>
            <div className="page-title_cp">
                <h1>Edit Product</h1>
            </div>
        </div>
        <div className="middle-content_cp">
        <div className="product-price_cp">
            <div>
              Name<span style={{color: 'red'}} >*</span>
            </div>
            <div>
              <input
              style={{width:"30rem" , textAlign:"center"}}
              value={name}
            
            onChange={event =>setName(event.target.value)}>
            </input>
            </div>
          </div>
          <div className="product-price_cp">
            <div>
              Price<span style={{color: 'red'}} >*</span>
            </div>
            <div>
              <input
            style={{width:"30rem" , textAlign:"center"}} 
            value={price}
            onChange={event =>setPrice(event.target.value)}>

            </input>
            </div>
          </div>
          <div className="product-price_cp">
            <div>
              Description<span style={{color: 'red'}} >*</span>
            </div>
            <div>
            <textarea 
            value={description}
            style={{width:"30rem" , height:'30rem', textAlign:"center"}}
            onChange={event =>setDescription(event.target.value)}
          ></textarea>
            </div>

          </div>
          {/* <div className="product-image">
                <img src={product.picture_link} alt="No Image" />
            </div> */}
          <div className = 'product-pictures_cp'>
            <div>
              Pictures<span style={{color: 'red'}} >*</span>
              <div className="product-image_cp">
                <img src={product[0].picture_link} alt="No Image" />
            </div>
            </div>
            {/* <Pic/> */}
          </div>
        </div>
        
        <button onClick={(event)=>{
            var docRef=db.collection('product').doc(s)
            docRef.update({
              name:name,
              price:price,
              description:description
          }).then(()=>{
            alert("Changes Saved")
            history.push("/editproduct")
          })
        }} style={{marginBottom:'1rem', marginTop:'2rem'}}>
          Click to confirm all Changes
        </button>
        <div className="footer_cp">  
          <div className="social-media_cp">
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
            <div className="footer-bar_cp">
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
export default ChangeProduct;