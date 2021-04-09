import React, { useState, useEffect } from "react";
import "./shopping_cart.css";
import {db} from "./fire.js";
import firebase from "firebase";
import axios from "axios";
import Select from 'react-select';
import { Route, Switch } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { BsTrashFill } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

import logo from "./images/logo.png";

function Shoppingcart () {
    const [items,setItems] = React.useState([]);
    const [quantity, setQuantity] = React.useState(1);
    return(
        <div>
            <div className='website-header'>
            <div>
                <a className="contact-button" href="https://www.google.com/">
                    CONTACT US
                </a>
                </div>
            </div>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <a className="rawayath-logo" href="">
                        <img src={logo} alt="Image of logo" width="100" height="33"></img>
                    </a>
                </Grid>
                <Grid item xs={4}>
                    <div className="page-title">SHOPPING CART</div>
                </Grid>
            </Grid>
            <div className='middle-content'>
                <div className='heading-box'></div>
                <div className='heading-box'>PREVIEW</div>
                <div className='heading-box'>PRODUCT</div>
                <div className='heading-box'>PRICE</div>
                <div className='heading-box'>QUANTITY</div>
                <div className='heading-box'>TOTAL</div>
                {items.map((item,index)=>(
                    <div>
                        <div className='list-box'>
                            <IconButton aria-label="delete" >
                                <DeleteIcon />
                            </IconButton>
                        </div>
                        <div className='list-box'>
                            <img src={item.picture_link}></img>
                        </div>
                        <div className='list-box'>{item.name}</div>
                        <div className='list-box'>{item.name}</div>
                        <div className='list-box' style={{alignContent:'center', paddingLeft:'6em'}}>
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={event => setQuantity(event.target.value)}>
                                <option selected>Quantity</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div className='list-box'>{item.price*quantity}</div>
                    </div>
                ))}
                {/* delete the following 6 divs  after adding backend */}
                <div className='list-box'>
                    <IconButton aria-label="delete" >
                        <DeleteIcon />
                    </IconButton>
                </div>
                <div className='list-box'></div>
                <div className='list-box'></div>
                <div className='list-box'></div>
                <div className='list-box' style={{alignContent:'center', paddingLeft:'6em'}}>
                    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={event => setQuantity(event.target.value)}>
                        <option selected>1</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div className='list-box'>{1*quantity}</div>
            </div>
            <div className='r-box'>
                <div className='final-box'>SUB-TOTAL</div>
                <div className='final-box'></div>
                <div className='final-box'>DISCOUNT CODE</div>
                <div className='final-box'></div>
                <div className='final-box' style={{fontSize: '1.5em', fontWeight: 'bold'}}>TOTAL</div>
                <div className='final-box'></div>
            </div>
            <button type='submit' style={{margin: "2em auto 0em", height:'3em', width:'9em', fontSize: '1em', fontWeight:'bold', borderRadius:'1em', outline:'none', backgroundColor: '#504d4d'}}>{
                <text style={{color:'white'}}>REGISTER</text>
                }</button>
        </div>
        
    );
}

export default Shoppingcart;