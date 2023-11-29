import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.css';
import '../../css/ie6.css';
import '../../css/ie7.css';


const index2 = () => {
  return (
  <div>
  <title>Pet Shop | PetMart</title>
  <meta charSet="iso-8859-1" />
  <link rel="stylesheet" href="../../css/style.css" type="text/css" />
  <link rel="stylesheet" href="../../css/ie6.css" type="text/css" />
  <link rel="stylesheet" href="../../css/ie7.css" type="text/css" />
<div id="header"> <a href="#" id="logo">
  < img src="#"  width={310} height={114} /></a>
  <ul className="navigation">
      <li><Link to="/">Home</Link></li>
      <li className="active"><Link to="/petmart">PetMart</Link></li>
      <li><Link to="/about">About us</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/petguide">PetGuide</Link></li>
      <li><Link to="/contact">Contact us</Link></li>
      <li><a href="/login">Iniciar seccion</a></li>
    </ul>
  </div>
  <div id="body">
    <div id="content">
      <div className="search">
        <input type="text" name="s" defaultValue="Find" />
        <button>&nbsp;</button>
        <label htmlFor="articles">
          <input type="radio" id="articles" />
          Articles</label>
        <label htmlFor="products">
          <input type="radio" id="products" defaultChecked />
          PetMart Products</label>
      </div>
      <div className="content">
        <ul>
          <li> <Link to="#"><img src= "#"width={140} height={250} /></Link>
            <h2>Food Area</h2>
            <span><Link to="#">Dog Food</Link></span> <span><Link to="#">Cat Food</Link></span> <span><Link to="#">Bird Food</Link></span> <span><Link to="#">Fish Food</Link></span> <span><Link to="#">Reptile Food</Link></span> <span><Link to="#">Small Pet Food</Link></span> <span><Link to="#">Large Pet Food</Link></span> <span><Link className="more" to="#">View all</Link></span> </li>
          <li> <Link to="#"><img src="../images/cat3.jpg" width={140} height={250} /></Link>
            <h2>Accesories</h2>
            <span><Link to="#">Oder Control</Link></span> <span><Link to="#">Liners</Link></span> <span><Link to="#">Scoops &amp; Mats</Link></span> <span><Link to="#">Collars</Link></span> <span><Link to="#">Harnesses</Link></span> <span><Link to="#">ID Tags</Link></span> <span><Link to="#">Leashes</Link></span> <span><Link className="more" to="#">View all</Link></span> </li>
          <li> <Link to="#"><img src="../images/dog2.jpg" width={140} height={240} /></Link>
            <h2>Training &amp; Behavior</h2>
            <span><Link to="#">Dog Food</Link></span> <span><Link to="#">Cat Food</Link></span> <span><Link to="#">Bird Food</Link></span> <span><Link to="#">Fish Food</Link></span> <span><Link to="#">Reptile Food</Link></span> <span><Link to="#">Small Pet Food</Link></span> <span><Link className="more" to="#">View all</Link></span> </li>
          <li> <Link to="#"><img src="../images/bird3.jpg" width={140} height={240} /></Link>
            <h2>Health Center</h2>
            <span><Link to="#">Multivitamins</Link></span> <span><Link to="#">Dental Care</Link></span> <span><Link to="#">First Aid Kits</Link></span> <span><Link to="#">Medications</Link></span> <span><Link to="#">Supplements</Link></span> <span><Link to="#">Eye &amp; Ear Care</Link></span> <span><Link to="#">Hip &amp; Joint Health</Link></span> <span><Link className="more" to="#">View all</Link></span> </li>
          <li> <Link to="#"><img src="../images/bird-in-cage.jpg" width={140} height={250} /></Link>
            <h2>Travel Essentials</h2>
            <span><Link to="#">Car Barriers</Link></span> <span><Link to="#">Car Seat Covers</Link></span> <span><Link to="#">Car Seats</Link></span> <span><Link to="#">ramps</Link></span> <span><Link to="#">Seat Belts &amp; Harnesses</Link></span> <span><Link to="#">Strollers</Link></span> <span><Link to="#">Travel Creates &amp; Carrier</Link></span> <span><Link className="more" to="#">View all</Link></span> </li>
          <li> <Link to="#"><img src="../images/puppy3.jpg" width={140} height={240} /></Link>
            <h2>Grooming</h2>
            <span><Link to="#">Brushes &amp; Combs</Link></span> <span><Link to="#">Deodorizers</Link></span> <span><Link to="#">Cologne</Link></span> <span><Link to="#">Ear &amp; Eya Cleaners</Link></span> <span><Link to="#">Nail Clippers</Link></span> <span><Link to="#">Shampoo</Link></span> <span><Link to="#">Conditioners</Link></span> <span><Link to="#">Shed Controls</Link></span> <span><Link className="more" to="#">View all</Link></span> </li>
        </ul>
      </div>
      <div id="sidebar"> <Link to="#"><img src="images/discount.jpg" width={300} height={790} /></Link> </div>
    </div>
    <div className="featured">
      <ul>
        <li><Link to="#"><img src="../images/organic-and-chemical-free.jpg" width={300} height={90} /></Link></li>
        <li><Link to="#"><img src="../images/good-food.jpg" width={300} height={90} /></Link></li>
        <li className="last"><Link to="#"><img src="../images/pet-grooming.jpg" width={300} height={90} /></Link></li>
      </ul>
    </div>
  </div>
  <div id="footer">
    <div className="section">
      <ul>
        <li> <img src="../images/friendly-pets.jpg" width={240} height={186} />
          <h2><Link to="#">Friendly Pets</Link></h2>
          <p> Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed diam nonummy nib. <Link className="more" to="#">Read More</Link> </p>
        </li>
        <li> <img src="../images/pet-lover2.jpg" width={240} height={186} />
          <h2><Link to="#">How dangerous are they</Link></h2>
          <p> Lorem ipsum dolor sit amet, cons ectetuer adepis cing, sed diam euis. <Link className="more" to="#">Read More</Link> </p>
        </li>
        <li>
        <img src="../images/healthy-dog.jpg" width={240} height={186} alt="" />
      <h2><Link to="#">Keep them healthy</Link></h2>
      <p> Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed diam nonu mmy. <Link className="more" to="#">Read More</Link> </p>
      </li>
        <li>
          <h2><Link to="#">Love...love...love...pets</Link></h2>
          <p> Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed diameusim. <Link className="more" to="#">Read More</Link> </p>
          <img src="../images/pet-lover.jpg" width={240} height={186} /> </li>
      </ul>
    </div>
    <div id="footnote">
      <div className="section">Copyright © 2012 <Link to="#">Company Name</Link> All rights reserved | Website Template By <Link target="_blank" to="http://www.freewebsitetemplates.com/">freewebsitetemplates.com</Link></div>
    </div>
  </div>
</div>

  );
};

export default index2;
