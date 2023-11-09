import React from 'react';
import { Link } from 'react-router-dom';

const about = () => {
  return (
   <div>
  <title>Pet Shop | About</title>
  <meta charSet="iso-8859-1" />
  <link href="/front/src/css/style.css" rel="stylesheet" type="text/css" />
  {/*[if IE 6]><link href="css/ie6.css" rel="stylesheet" type="text/css"><![endif]*/}
  {/*[if IE 7]><link href="css/ie7.css" rel="stylesheet" type="text/css"><![endif]*/}
  <div id="header"> <Link to="#" id="logo"><img src="/front/src/images/logo.gif" width={310} height={114} alt /></Link>
    <ul className="navigation">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/petmart">PetMart</Link></li>
      <li className="active"><Link to="/about">About us</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/petguide">PetGuide</Link></li>
      <li><Link to="/contact">Contact us</Link></li>
    </ul>
  </div>
  <div id="body">
    <div id="content">
      <div className="content">
        <div className="about">
          <h2>ABOUT US</h2>
          <ul>
            <li>
              <h2><Link to="#">We Have Free Templates for Everyone</Link></h2>
              <p> Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What's more, they're absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the Terms of Use. You can even remove all our links if you want to. </p>
            </li>
            <li>
              <h2><Link to="#">We Have More Templates for You</Link></h2>
              <p> Looking for more templates? Just browse through all our Free Website Templates and find what you're looking for. But if you don't find any website template you can use, you can try our Free Web Design service and tell us all about it. Maybe you're looking for something different, something special. And we love the challenge of doing something different and something special. </p>
            </li>
            <li>
              <h2><Link to="#">Be Part of Our Community</Link></h2>
              <p> If you're experiencing issues and concerns about this website template, join the discussion on our forum and meet other people in the community who share the same interests with you. </p>
            </li>
            <li>
              <h2><Link to="#">Template details</Link></h2>
              <p> <span>Version 19</span> Website Template details, discussion and updates for this Petshop Template. Website Template design by Free Website Templates. Please feel free to remove some or all the text and links of this page and replace it with your own About content. </p>
            </li>
          </ul>
        </div>
      </div>
      <div id="sidebar">
        <div className="featured">
          <h2>Featured Topic</h2>
          <ul>
            <li> <Link to="#"><img src="/front/src/images/puppy2.jpg" width={115} height={155} alt /></Link>
              <h2><Link to="#">What they need</Link></h2>
              <p> Mirum est notare quam littera gothica, quam nunc putamus parum clara m, ant epo suerit li tterar. <Link className="more" href="#">read more</Link> </p>
            </li>
            <li> <Link to="#"><img src="/front/src/images/bird2.jpg" width={115} height={155} alt /></Link>
              <h2><Link to="#">Fun birds</Link></h2>
              <p> Mirum est notare quam littera gothica, quam nunc putamus parum clara m, ant epo suerit li tterar. <Link className="more" href="#">read more</Link> </p>
            </li>
            <li className="last"> <Link to="#"><img src="/front/src/images/cat2.jpg" width={115} height={155} alt /></Link>
              <h2><Link to="#">Something good</Link></h2>
              <p> Mirum est notare quam littera gothica, quam nunc putamus parum clara m, ant epo suerit li tterar. <Link className="more" href="#">read more</Link> </p>
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
            <li className="active"><Link to="#">Shopping Guides</Link></li>
            <li><Link to="#">Discounted Items</Link></li>
          </ul>
          <div className="aside">
            <div>
              <div>
                <ul>
                  <li><Link to="#">Pet Accesories </Link> <Link className="more" to="#">see all</Link></li>
                  <li><Link to="#">Bath Essentials</Link> <Link className="more" to="#">see all</Link></li>
                  <li><Link to="#">Pet Food</Link> <Link className="more" to="#">see all</Link></li>
                  <li><Link to="#">Pet Vitamins</Link> <Link className="more" to="#">see all</Link></li>
                  <li><Link to="#">Pet Needs</Link> <Link className="more" to="#">see all</Link></li>
                  <li><Link to="#">Pet Toy and Treats</Link> <Link className="more" to="#">see all</Link></li>
                  <li><Link to="#">Pet Supplies</Link> <Link className="more" to="#">see all</Link></li>
                  <li><Link to="#">Pet Emergency Kit</Link> <Link className="more" to="#">see all</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          <p> Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed diam nonu mmy. <Link className="more" to="#">Read More</Link> </p>
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

export default about;
