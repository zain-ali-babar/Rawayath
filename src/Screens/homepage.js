import react from 'react'
//import './App.css';

//this is imports for homePage screen
import './frontend/styles/homepage.css';
import {FaSearch, FaUserAlt} from 'react-icons/fa'
import Logo from './images/logo.png'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

function HomePage(){

    function HomePageCard(){
        return(
          <div className="card">
            <a href ="">
            <Card>
              <CardBody>
              <img src="https://i.pinimg.com/236x/f6/46/8d/f6468d1d0bb282073b9b21256490e5c0.jpg" alt="No Image" />
                <CardTitle tag="h1" style={{padding:"0.7rem"}}>TITLE OF CLOTH</CardTitle>
                <CardSubtitle tag="h3" style={{padding:"0.5rem"}} >Rs. 9500</CardSubtitle>
              </CardBody>
            </Card>
            </a>
          </div>
        );
      }
    
    function HomePages(){
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
            <button>
              <FaUserAlt style={{color: 'white'}}></FaUserAlt>
              <span> SIGN IN / SIGN UP</span>
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
          <div className="middle-content">
            <HomePageCard/>
            <HomePageCard/>
            <HomePageCard/>
            <HomePageCard/>
            <HomePageCard/>
            <HomePageCard/>
            <HomePageCard/>
            <HomePageCard/>
            <HomePageCard/>
            <HomePageCard/>
    
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

    return(
        <HomePages/>
    );

}

export default HomePage