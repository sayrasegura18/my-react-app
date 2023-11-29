import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.css';
import '../../css/ie6.css';
import '../../css/ie7.css';


const about = () => {
  return (
   <div>
  <title>Pet Shop | About</title>
  <meta charSet="iso-8859-1" />
  <link href="../css/style.css" rel="stylesheet" type="text/css" />
  <link href="../css/ie6.css" rel="stylesheet" type="text/css" />
  <link href="../css/ie7.css" rel="stylesheet" type="text/css" />
  <div id="header"> <a href="#" id="logo">
    <img src="../images/logo.gif" width={310} height={114} alt /></a>
    <ul className="navigation">
      <li><a href="/">Home</a></li>
      <li><a href="/petmart">PetMart</a></li>
      <li className="active"><a href="/about">About us</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/petguide">PetGuide</a></li>
      <li><a href="/contact">Contact us</a></li>
      <li><a href="/login">Iniciar seccion</a></li>
    </ul>
  </div>
  <div id="body">
    <div id="content">
      <div className="content">
        <div className="about">
          <h2>ABOUT US</h2>
          <ul>
            <li>
              <h2><a href="#">We Have Free Templates for Everyone</a></h2>
              <p> Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What's more, they're absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the Terms of Use. You can even remove all our links if you want to. </p>
            </li>
            <li>
              <h2><a href="#">We Have More Templates for You</a></h2>
              <p> Looking for more templates? Just browse through all our Free Website Templates and find what you're looking for. But if you don't find any website template you can use, you can try our Free Web Design service and tell us all about it. Maybe you're looking for something different, something special. And we love the challenge of doing something different and something special. </p>
            </li>
            <li>
              <h2><a href="#">Be Part of Our Community</a></h2>
              <p> If you're experiencing issues and concerns about this website template, join the discussion on our forum and meet other people in the community who share the same interests with you. </p>
            </li>
            <li>
              <h2><a href="#">Template details</a></h2>
              <p> <span>Version 19</span> Website Template details, discussion and updates for this Petshop Template. Website Template design by Free Website Templates. Please feel free to remove some or all the text and links of this page and replace it with your own About content. </p>
            </li>
          </ul>
        </div>
      </div>
      <div id="sidebar">
        <div className="featured">
          <h2>Featured Topic</h2>
          <ul>
            <li> <a href="#"><img src="../images/puppy2.jpg" width={115} height={155} alt /></a>
              <h2><a href="#">What they need</a></h2>
              <p> Mirum est notare quam littera gothica, quam nunc putamus parum clara m, ant epo suerit li tterar. <a className="more" href="#">read more</a> </p>
            </li>
            <li> <a href="#"><img src="../images/bird2.jpg" width={115} height={155} alt /></a>
              <h2><a href="#">Fun birds</a></h2>
              <p> Mirum est notare quam littera gothica, quam nunc putamus parum clara m, ant epo suerit li tterar. <a className="more" href="#">read more</a> </p>
            </li>
            <li className="last"> <a href="#"><img src="../images/cat2.jpg" width={115} height={155} alt /></a>
              <h2><a href="#">Something good</a></h2>
              <p> Mirum est notare quam littera gothica, quam nunc putamus parum clara m, ant epo suerit li tterar. <a className="more" href="#">read more</a> </p>
            </li>
          </ul>
        </div>
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
        <div className="section">
          <ul className="navigation">
            <li className="active"><a href="#">Shopping Guides</a></li>
            <li><a href="#">Discounted Items</a></li>
          </ul>
          <div className="aside">
            <div>
              <div>
                <ul>
                  <li><a href="#">Pet Accesories </a> <a className="more" href="#">see all</a></li>
                  <li><a href="#">Bath Essentials</a> <a className="more" href="#">see all</a></li>
                  <li><a href="#">Pet Food</a> <a className="more" href="#">see all</a></li>
                  <li><a href="#">Pet Vitamins</a> <a className="more" href="#">see all</a></li>
                  <li><a href="#">Pet Needs</a> <a className="more" href="#">see all</a></li>
                  <li><a href="#">Pet Toy and Treats</a> <a className="more" href="#">see all</a></li>
                  <li><a href="#">Pet Supplies</a> <a className="more" href="#">see all</a></li>
                  <li><a href="#">Pet Emergency Kit</a> <a className="more" href="#">see all</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="featured">
      <ul>
        <li><a href="#"><img src="../images/organic-and-chemical-free.jpg" width={300} height={90} alt /></a></li>
        <li><a href="#"><img src="../images/good-food.jpg" width={300} height={90} alt /></a></li>
        <li className="last"><a href="#"><img src="../../images/pet-grooming.jpg" width={300} height={90} alt /></a></li>
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

export default about;
