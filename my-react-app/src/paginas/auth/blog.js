import React from 'react';
import {Link } from 'react-router-dom';
import '../../css/style.css';
import '../../css/ie6.css';
import '../../css/ie7.css';

const blog = () => {
  return (
<div>
  <title>Pet Shop | Blog</title>
  <meta charSet="iso-8859-1" />
  <link href="../css/style.css" rel="stylesheet" type="text/css" />
  <link href="../css/ie6.css" rel="stylesheet" type="text/css" />
  <link href="../css/ie7.css" rel="stylesheet" type="text/css" />
 
  <div id="header"> <a href="#" id="logo"><img src="../images/logo.gif" width={310} height={114} alt /></a>
    <ul className="navigation">
      <li><a href="/">Home</a></li>
      <li><a href="/petmart">PetMart</a></li>
      <li><a href="/about">About us</a></li>
      <li className="active"><a href="/blog">Blog</a></li>
      <li><a href="/petguide">PetGuide</a></li>
      <li><a href="/contact">Contact us</a></li>
      <li><a href="/login">Iniciar seccion</a></li>
    </ul>
  </div>
  <div id="body">
    <div id="content">
      <div className="content">
        <ul className="articles">
          <li>
            <div> <span>Dec 3</span>
              <h2>New Pupps in the Shop</h2>
              <a className="heart" href="#">&nbsp;</a> <a className="twitter" href="#">&nbsp;</a> <a className="facebook" href="#">&nbsp;</a> </div>
            <p> Lorem ipsum sot amet, consec teteur adipis cing elitsed diam non ummy nibh euismod tincidunt ut laoreet dolore magna. Aliquam erat volutpat. ut wisi enim ad veniam, quis nostrud excerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem eum iruire dolor in hendrerit in vulputate vellit essemolestie consequat, velillum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim ui blandit praesent luptatum zzril delenit augue duis dolore te feugiat nulla facilisi. Nam liner tempor cum soluta nobis eleifend option congue nihil imperdiet doming id uod mazim placerat facer posim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etaim procesus dynamicus. </p>
          </li>
          <li>
            <div> <span>Nov 29</span>
              <h2>How about let's Celebrate!</h2>
              <a className="heart" href="#">&nbsp;</a> <a className="twitter" href="#">&nbsp;</a> <a className="facebook" href="#">&nbsp;</a> </div>
            <p> Lorem ipsum sot amet, consec teteur adipis cing elitsed diam non ummy nibh euismod tincidunt ut laoreet dolore magna. Aliquam erat volutpat. ut wisi enim ad veniam, quis nostrud excerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem eum iruire dolor in hendrerit in vulputate vellit essemolestie consequat, velillum dolore eu feugiat nulla facilisis at vero eros et accumsan </p>
          </li>
          <li>
            <div> <span>Nov 11</span>
              <h2>Sport with you Pet's</h2>
              <a className="heart" href="#">&nbsp;</a> <a className="twitter" href="#">&nbsp;</a> <a className="facebook" href="#">&nbsp;</a> </div>
            <p> Lorem ipsum sot amet, consec teteur adipis cing elitsed diam non ummy nibh euismod tincidunt ut laoreet dolore magna. Aliquam erat volutpat. ut wisi enim ad veniam, quis nostrud excerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem eum iruire dolor in hendrerit in vulputate vellit essemolestie consequat, velillum dolore eu feugiat nulla facilisis at vero eros et accumsan </p>
          </li>
        </ul>
        <div> <a className="new" href="#">New Post</a> <a className="old" href="#">Old Post</a> </div>
      </div>
      <div id="sidebar">
        <div id="section">
          <div>
            <div>
              <h2>Archives</h2>
              <ul className="archive">
                <li><a className="active" href="#">2011 <span>(60)</span> </a>
                  <ul>
                    <li><a href="#">December <span>(1)</span></a></li>
                    <li><a href="#">November <span>(11)</span></a></li>
                    <li><a href="#">October <span>(3)</span></a></li>
                    <li><a href="#">September <span>(8)</span></a></li>
                    <li><a href="#">August <span>(3)</span></a></li>
                    <li><a href="#">July <span>(2)</span></a></li>
                    <li><a href="#">June <span /></a></li>
                    <li><a href="#">May <span>(8)</span></a></li>
                    <li><a href="#">April <span>(7)</span></a></li>
                    <li><a href="#">March <span>(7)</span></a></li>
                    <li><a href="#">Febuary <span>(10)</span></a></li>
                    <li><a href="#">January <span>(1)</span></a></li>
                  </ul>
                </li>
                <li><a href="#">2010 </a></li>
                <li><a href="#">2009</a></li>
              </ul>
            </div>
          </div>
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

export default blog;