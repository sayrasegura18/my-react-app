import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.css';
import '../../css/ie6.css';
import '../../css/ie7.css';

const contact = () => {
  return (
  <div>
  <title>Pet Shop | Contact</title>
  <meta charSet="iso-8859-1" />
  <link rel="stylesheet" href="../../css/style.css" type="text/css" />
  <link rel="stylesheet" href="../../css/ie6.css" type="text/css" />
  <link rel="stylesheet" href="../../css/ie7.css" type="text/css" />
  <div id="header"> <a href="#" id="logo"><img src="../../images/logo.gif" width={310} height={114} alt /></a>
    <ul className="navigation">
      <li><a href="/">Home</a></li>
      <li><a href="/petmart">PetMart</a></li>
      <li><a href="/about">About us</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/petguide">PetGuide</a></li>
      <li className="active"><a href="/contact">Contact us</a></li>
      <li><a href="/login">Iniciar seccion</a></li>
    </ul>
  </div>
  <div id="body">
    <div id="content">
      <div className="content">
        <h2>Contact us</h2>
        <div>
          <p> This website template has been designed by free website templates for you, free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the forum </p>
        </div>
        <ul className="connect">
          <li>
            <h2>Customer Sales and Serevice</h2>
            <p> <span>E-mail: <a href="#">info@domain.com</a></span> <span>Call or e-mail us for help with any aspect of your purchase, online or offline.</span> </p>
            <p> <span>Call toll-free: 877 000 0000</span> <span>Call toll-free: 866 000 0000</span> <span>Call toll-free: 877 000 0000</span> </p>
          </li>
          <li>
            <h2>Store Hours</h2>
            <p> <span>monday to Friday 9:00 am - 7:00 pm EST (GMT -05000)</span> <span>Closed Saturday and Sunday</span> </p>
          </li>
          <li>
            <h2>Mailing Address</h2>
            <p> <span>Petshop</span> <span>250 Lorem Ipsum Street</span> <span>4th Floor</span> <span>jaonfanr, Caknan 109935</span> <span>Kiangab</span> </p>
          </li>
        </ul>
      </div>
      <div id="sidebar">
        <div className="connect">
          <h2>Follow Us</h2>
          <ul>
            <li><a className="facebook" href="#">Facebook</a></li>
            <li><a className="subscribe" href="#">Subscribe</a></li>
            <li><a className="twitter" href="#">Twitter</a></li>
            <li><a className="flicker" href="#">Flicker</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="featured">
      <ul>
        <li><a href="#"><img src="../images/organic-and-chemical-free.jpg" width={300} height={90} alt /></a></li>
        <li><a href="#"><img src="../images/good-food.jpg" width={300} height={90} alt /></a></li>
        <li className="last"><a href="#"><img src="../images/pet-grooming.jpg" width={300} height={90} alt /></a></li>
      </ul>
    </div>
  </div>
  <div id="footer">
    <div className="section">
      <ul>
        <li> <img src="../images/friendly-pets.jpg" width={240} height={186} alt />
          <h2><a href="#">Friendly Pets</a></h2>
          <p> Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed diam nonummy nib. <a className="more" href="#">Read More</a> </p>
        </li>
        <li> <img src="../images/pet-lover2.jpg" width={240} height={186} alt />
          <h2><a href="#">How dangerous are they</a></h2>
          <p> Lorem ipsum dolor sit amet, cons ectetuer adepis cing, sed diam euis. <a className="more" href="#">Read More</a> </p>
        </li>
        <li> <img src="../images/healthy-dog.jpg" width={240} height={186} alt />
          <h2><a href="#">Keep them healthy</a></h2>
          <p> Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed diam nonu mmy. <a className="more" href="#">Read More</a> </p>
        </li>
        <li>
          <h2><a href="#">Love...love...love...pets</a></h2>
          <p> Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed diameusim. <a className="more" href="#">Read More</a> </p>
          <img src="../images/pet-lover.jpg" width={240} height={186} alt /> </li>
      </ul>
    </div>
    <div id="footnote">
      <div className="section">Copyright © 2012 <a href="#">Company Name</a> All rights reserved | Website Template By <a target="_blank" href="http://www.freewebsitetemplates.com/">freewebsitetemplates.com</a></div>
    </div>
  </div>
</div>


    );
};

export default contact;