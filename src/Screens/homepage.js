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
import { FaMapMarkerAlt,FaAngleDown } from "react-icons/fa";
import { useHistory,useParams } from "react-router-dom";
import firebase from "firebase";
import Popup from "reactjs-popup";
import Alert from 'react-bootstrap/Alert'


function HomePage(){
  const history=useHistory();
  const [listProduct , setListProduct] = useState([])
  const [user , setUser] = useState()
  const [categ, setCateg]=useState("all")
  const [search, setSearch]=useState("")
  const [pagelimit , setPagelimit] = useState(1)
  // HomePageCard(product_info['name'] , product_info['picture_link'] , product_info['price'])

  useEffect(()=>{
    // console.log("useeffect work")
    db.collection('product').onSnapshot(snapshot =>{
      setListProduct(snapshot.docs.map(doc=> ({id: doc.data().product_id ,color: doc.data().color, name: doc.data().name, price: doc.data().price, size: doc.data().size, stock: doc.data().stock   ,picture_link: doc.data().picture_links,category:doc.data().category})))
    })
  }, [])


  
  function HomePageCard(){
    console.log("--------")
    console.log(listProduct.length)
    return(
      <div className = "middle_content_hp">
        
      {
        listProduct.map((product_info,index)=>{
          {/* const pic_link = product_info['product_link']; */}
          if (product_info['category']==categ && product_info['name'].toLowerCase().includes(search.toLowerCase())){
          return (
            <div className="card" id= {product_info['id']} onClick={()=>{
              
              return(
      
              history.push("./pd/"+product_info['id'])
              );}}>
            
          <a href ="">
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

          );}
          else if (categ=="all" && product_info['name'].toLowerCase().includes(search.toLowerCase())){
            return (
            <div className="card" id= {product_info['id']} onClick={()=>{
              
              return(
      
              history.push("./pd/"+product_info['id'])
              );}}>
            
          <a href ="">
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
          }
        })
      }
      
      </div>
    );

    }

    function reg (){
      return(
       history.push("./login")
      );
    }
  function SignInButton(){
    return(
      <div className="signin_button">
        <button onClick={reg}>
          <FaUserAlt style={{color: 'white'}}></FaUserAlt>
          <span> SIGN IN / SIGN UP</span>
        </button>

      </div>
    );
  }

  function temp () {
    return(
      <div class="alert">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
        This is an alert box.
      </div>
    )
  }

function logout(){
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
const handlHistory=(e)=>{
  return(
    history.push("./orderhistory")
  )
}
const handlShopping=(e)=>{
  return(
    history.push("./shoppingcart")
  )
}
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

const handlePassword=(e)=>{
  // e.preventDefault()
  // myFunction()
  firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email).then(function() {
    alert("Please check email to change password")
  }).catch(function(error) {
    alert("Error!")
  });
}
  function DropDown(){
    return(
      <div class="dropdown">
        <button class="dropbtn"> {user} <FaAngleDown/></button>
        <div class="dropdown_content">
          <a href="#" onClick={handlEdit}>Edit Profile</a>
          <a href="#" onClick={handlHistory}>Order History</a>
          <a href="#" onClick={handlShopping}>Shopping Cart</a>
          <a href="#" onClick={handlePassword}>Change Password</a>
          <a href="#" onClick={logout}>Sign Out</a>
        </div>
      </div>
    );
  }

  function DisplayButton(){
    var user = firebase.auth().currentUser;

    if (user != null) {
      
      db.collection('buyer').doc(user.uid).get().then((doc) => {
        if (doc.exists) {

            setUser(doc.data().name)
            console.log(user)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    });
    return <DropDown/>;
      
      
    }else {
      return <SignInButton/>;
    }
  }

  // function test(){
  //   if(userStatus=='false'){
  //     setUserStatus('true')
  //   }else{
  //     setUserStatus('false')
  //   }
  // }
  const handleDef=(e)=>{
    e.preventDefault()
    setCateg("all")
    console.log(categ)
  }
const handleCategm=(e)=>{
  e.preventDefault()
  setCateg("men")
  console.log(categ)
}
const handleCategs=(e)=>{
  e.preventDefault()
  setCateg("stitched")
  console.log(categ)
}
const handleCategu=(e)=>{
  e.preventDefault()
  setCateg("unstitiched")
  console.log(categ)
}
const handleCategp=(e)=>{
  e.preventDefault()
  setCateg("pret")
  console.log(categ)
}
const handlEdit=(e)=>{
  return(
    history.push("./editprofile")
  )
}


// // const moreItems=(e)=>{
// //   e.preventDefault()
// //   setPagelimit(pagelimit+1)
  
// }
const handlFeed=(e)=>{
  return(
    history.push("./feedbuyer")
  )
}
    
  return (
    <div className="homepage" onClick={DisplayButton}>
    <div className="header">
      <a href="" onClick={handlFeed} className="contact_us_bar">
        Contact Us/Feedback
      </a>
    </div>
    <div className="title_bar">
      <div className="search_bar">
        <div className="search_bar_content">
          <input placeholder="Search" onChange={(e)=>{
            setSearch(e.target.value)
          }}></input>
          <a href="">
          <FaSearch style={{color: "#504d4d"}}  />
          </a>
        </div>
      </div>
      <div className="rawayath_logo" onClick={handleDef}>
        <img src={Logo} width="200rem"></img>
      </div>
      <div className="display_button">
        <DisplayButton/>
      </div>

    </div>
    <div style={{backgroundColor: "#504d4d", height:"2px"}}></div>
    <div className="categories">
      {/* <div className="accessories"><a href="">accessories</a></div> */}
      <div className="mens_wear"  onClick={handleCategm}>mens wear</div>
      <div className="stitched" onClick={handleCategs}>stitched</div>
      <div className="unstitched" onClick={handleCategu}>unstitched</div>
      <div className="pret" onClick={handleCategp}>pret</div>
      {/* <div className="footwear"><a href="">footwear</a></div> */}
    </div>
    <div className="cover_picture" style={{
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
    {/* <div><button onClick={moreItems}>More Items</button></div> */}
    <div className="footer">  
    <div className="social_media">
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
      <div className="footer_bar">
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