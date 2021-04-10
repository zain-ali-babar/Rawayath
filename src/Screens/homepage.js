import React , {useState,useEffect} from 'react'

import {db} from './fire.js'

//this is imports for homePage screen
import './homepage.css';
import {FaSearch, FaUserAlt} from 'react-icons/fa'
import Logo from './images/logo.png'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { FaFacebookSquare } from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa"
import { FaInstagram } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useHistory,useParams } from "react-router-dom";



function HomePage(){
  const history = useHistory();
  const [listProduct , setListProduct] = useState([])
  // HomePageCard(product_info['name'] , product_info['picture_link'] , product_info['price'])

  useEffect(()=>{
    console.log("useeffect work")
    db.collection('product').onSnapshot(snapshot =>{
      setListProduct(snapshot.docs.map(doc=> ({id: doc.data().product_id , name: doc.data().name, price: doc.data().price, description: doc.data().description   ,picture_link: doc.data().picture_links})))
    })
  }, [])
  function reg (){
    return(
     history.push("./login")
    );
  }
  
  function HomePageCard(){
    return(
      <div className = "middle-content">
        
      {
        listProduct.map((product_info)=>{
          {/* const pic_link = product_info['product_link']; */}
          return (
            
            <div className="card" id= {product_info['id']} onClick={()=>{
              
              return(
      
      history.push("./pd/"+product_info['id'])
 
     );
            }}>
          <a  >
          <Card>
            <CardBody>
            {/* aa */}
            <img src={product_info['picture_link']} alt='aaaa' />
              <CardTitle tag="h1" style={{padding:"0.7rem"}}>{product_info['name']}</CardTitle>
              <CardSubtitle tag="h3" style={{padding:"0.5rem"}} >Rs. {product_info['price']}</CardSubtitle>
              {/* {pic_link} */}
            </CardBody>
          </Card>
          </a>
      </div>

          );
        })
      }
      
      </div>
    );

    }

      
    
  



    const sp=(ev)=>{
      ev.preventDefault()
      history.push("/shoppingcart")
    }

  return (
    <div className="homepage">
    <div className="header">
      <a href="" className="contact-us-bar">
        Contact Us
      </a>
    </div>
    <div className="title-bar">
      <div className="search-bar">
        <div className="search-bar-content">
          <input placeholder="Search"></input>
          <a href="">
          <FaSearch style={{color: "#504d4d"}}  />
          </a>
        </div>
      </div>
      <div className="rawayath-logo">
        <img src={Logo} width="200rem"></img>
      </div>
      <div className="signin-button">
      <button onClick={reg}>
        <FaUserAlt style={{color: 'white'}}></FaUserAlt>
        <span> SIGN IN / SIGN UP</span>
      </button>

      </div>
      <div className="shoppingcart-button">
            <button onClick={sp}>
              <FaShoppingCart/>
            </button>
          </div>
    </div>
    <div style={{backgroundColor: "#504d4d", height:"2px"}}></div>
    <div className="categories">
      <div className="accessories"><a href="">accessories</a></div>
      <div className="mens-wear"><a href="">mens wear</a></div>
      <div className="stitched"><a href="">stitched</a></div>
      <div className="unstitched"><a href="">unstitched</a></div>
      <div className="pret"><a href="">pret</a></div>
      <div className="footwear"><a href="">footwear</a></div>
    </div>
    <div className="cover-picture" style={{
    }}>
      <img width='100%'  height="150rem" 
      // src="https://i.pinimg.com/originals/2d/d4/d8/2dd4d84e41262cf283b88df18845bd42.png"
      src="https://image.freepik.com/free-photo/stunning-barefooted-woman-trendy-fur-coat-dancing-laughing-photoshoot_197531-7073.jpg" 
      style={{
        padding: '1rem 0rem',
      }}
      ></img>
    </div>
    <div >
      {/* <HomePageCard/>
      <HomePageCard/>
      <HomePageCard/>
      <HomePageCard/>
      <HomePageCard/>
      <HomePageCard/>
      <HomePageCard/>
      <HomePageCard/>
      <HomePageCard/>
      <HomePageCard/> */}
      <HomePageCard/>

      {
        
      }

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

export default HomePage