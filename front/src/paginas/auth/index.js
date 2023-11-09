import React from 'react';
import { Link } from 'react-router-dom';

const index = () => {
  return (
  <div>
  <title>Pet Shop | PetMart</title>
  <meta charSet="iso-8859-1" />
  <link to="css/style.css" rel="stylesheet" type="text/css" />
  {/*[if IE 6]><link href="css/ie6.css" rel="stylesheet" type="text/css"><![endif]*/}
  {/*[if IE 7]><link href="css/ie7.css" rel="stylesheet" type="text/css"><![endif]*/}
  <div id="header"> <Link to="#" id="logo"><img src="images/logo.gif" width={310} height={114} alt /></Link>
    <ul className="navigation">
      <li><Link to="/">Home</Link></li>
      <li className="active"><Link to="/petmart">PetMart</Link></li>
      <li><Link to="/about">About us</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/petguide">PetGuide</Link></li>
      <li><Link to="/contact">Contact us</Link></li>
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
          <li> <Link to="#"><img src="../../images/koi2.jpg" width={140} height={250} alt /></Link>
            <h2>Food Area</h2>
            <span><Link to="#">Dog Food</Link></span> <span><Link to="#">Cat Food</Link></span> <span><Link to="#">Bird Food</Link></span> <span><Link to="#">Fish Food</Link></span> <span><Link to="#">Reptile Food</Link></span> <span><Link to="#">Small Pet Food</Link></span> <span><Link to="#">Large Pet Food</Link></span> <span><Link className="more" to="#">View all</Link></span> </li>
          <li> <Link to="#"><img src="/front/src/images/cat3.jpg" width={140} height={250} alt /></Link>
            <h2>Accesories</h2>
            <span><Link to="#">Oder Control</Link></span> <span><Link to="#">Liners</Link></span> <span><Link to="#">Scoops &amp; Mats</Link></span> <span><Link to="#">Collars</Link></span> <span><Link to="#">Harnesses</Link></span> <span><Link to="#">ID Tags</Link></span> <span><Link to="#">Leashes</Link></span> <span><Link className="more" to="#">View all</Link></span> </li>
          <li> <Link to="#"><img src="/front/src/images/dog2.jpg" width={140} height={240} alt /></Link>
            <h2>Training &amp; Behavior</h2>
            <span><Link to="#">Dog Food</Link></span> <span><Link to="#">Cat Food</Link></span> <span><Link to="#">Bird Food</Link></span> <span><Link to="#">Fish Food</Link></span> <span><Link to="#">Reptile Food</Link></span> <span><Link to="#">Small Pet Food</Link></span> <span><Link className="more" to="#">View all</Link></span> </li>
          <li> <Link to="#"><img src="/front/src/images/bird3.jpg" width={140} height={240} alt /></Link>
            <h2>Health Center</h2>
            <span><Link to="#">Multivitamins</Link></span> <span><Link to="#">Dental Care</Link></span> <span><Link to="#">First Aid Kits</Link></span> <span><Link to="#">Medications</Link></span> <span><Link to="#">Supplements</Link></span> <span><Link to="#">Eye &amp; Ear Care</Link></span> <span><Link to="#">Hip &amp; Joint Health</Link></span> <span><Link className="more" to="#">View all</Link></span> </li>
          <li> <Link to="#"><img src="/front/src/images/bird-in-cage.jpg" width={140} height={250} alt /></Link>
            <h2>Travel Essentials</h2>
            <span><Link to="#">Car Barriers</Link></span> <span><Link to="#">Car Seat Covers</Link></span> <span><Link to="#">Car Seats</Link></span> <span><Link to="#">ramps</Link></span> <span><Link to="#">Seat Belts &amp; Harnesses</Link></span> <span><Link to="#">Strollers</Link></span> <span><Link to="#">Travel Creates &amp; Carrier</Link></span> <span><Link className="more" to="#">View all</Link></span> </li>
          <li> <Link to="#"><img src="/front/src/images/puppy3.jpg" width={140} height={240} alt /></Link>
            <h2>Grooming</h2>
            <span><Link to="#">Brushes &amp; Combs</Link></span> <span><Link to="#">Deodorizers</Link></span> <span><Link to="#">Cologne</Link></span> <span><Link to="#">Ear &amp; Eya Cleaners</Link></span> <span><Link to="#">Nail Clippers</Link></span> <span><Link to="#">Shampoo</Link></span> <span><Link to="#">Conditioners</Link></span> <span><Link to="#">Shed Controls</Link></span> <span><Link className="more" to="#">View all</Link></span> </li>
        </ul>
      </div>
      <div id="sidebar"> <Link to="#"><img src="images/discount.jpg" width={300} height={790} alt /></Link> </div>
    </div>
    <div className="featured">
      <ul>
        <li><Link to="#"><img src="/front/src/images/organic-and-chemical-free.jpg" width={300} height={90} alt /></Link></li>
        <li><Link to="#"><img src="/front/src/images/good-food.jpg" width={300} height={90} alt /></Link></li>
        <li className="last"><Link to="#"><img src="/front/src/images/pet-grooming.jpg" width={300} height={90} alt /></Link></li>
      </ul>
    </div>
  </div>
  <div id="footer">
    <div className="section">
      <ul>
        <li> <img src="/front/src/images/friendly-pets.jpg" width={240} height={186} alt />
          <h2><Link to="#">Friendly Pets</Link></h2>
          <p> Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed diam nonummy nib. <Link className="more" to="#">Read More</Link> </p>
        </li>
        <li> <img src="/front/src/images/pet-lover2.jpg" width={240} height={186} alt />
          <h2><Link to="#">How dangerous are they</Link></h2>
          <p> Lorem ipsum dolor sit amet, cons ectetuer adepis cing, sed diam euis. <Link className="more" to="#">Read More</Link> </p>
        </li>
        <li> <img src="/front/src/images/healthy-dog.jpg" width={240} height={186} alt />
          <h2><Link to="#">Keep them healthy</Link></h2>
          <p> Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed diam nonu mmy. <Link  className="more" to="#">Read More</Link> </p>
        </li>
        <li>
          <h2><Link to="#">Love...love...love...pets</Link></h2>
          <p> Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed diameusim. <Link className="more" to="#">Read More</Link> </p>
          <img src="/front/src/images/pet-lover.jpg" width={240} height={186} alt /> </li>
      </ul>
    </div>
    <div id="footnote">
      <div className="section">Copyright © 2012 <Link to="#">Company Name</Link> All rights reserved | Website Template By <Link target="_blank" to="http://www.freewebsitetemplates.com/">freewebsitetemplates.com</Link></div>
    </div>
  </div>
</div>

  );
};

export default index;
