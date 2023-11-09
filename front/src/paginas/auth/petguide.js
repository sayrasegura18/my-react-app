import React from 'react';
import { Link } from 'react-router-dom';

const petguide = () => {
  return (
   <div>
  <title>Pet Shop | PetGuide</title>
  <meta charSet="iso-8859-1" />
  <link href="/front/src/css/style.css" rel="stylesheet" type="text/css" />
  {/*[if IE 6]><link href="css/ie6.css" rel="stylesheet" type="text/css"><![endif]*/}
  {/*[if IE 7]><link href="css/ie7.css" rel="stylesheet" type="text/css"><![endif]*/}
  <div id="header"> <a href="#" id="logo"><img src="/front/src/images/logo.gif" width={310} height={114} alt /></a>
    <ul className="navigation">
      <li><a href="/">Home</a></li>
      <li><a href="/petmart">PetMart</a></li>
      <li><a href="/about">About us</a></li>
      <li><a href="/blog">Blog</a></li>
      <li className="active"><a href="/petguide">PetGuide</a></li>
      <li><a href="/contact">Contact us</a></li>
    </ul>
  </div>
  <div id="body">
    <div id="content">
      <div className="content">
        <h2>Pet Guide</h2>
        <div>
          <p> Here are some useful pet quide tips for your pets. Easy and convenient for you to learn more on how to understand them. basic intructions to useful information not just for your pet but also for other animals. </p>
        </div>
        <ul className="section">
          <li>
            <h2>Pet Training Guides</h2>
            <p> Donec a purus sit amet risus consectetur lacinia et ut libero. Vestibulum tempus fauscibus sagittis. Ut gravida lacus eget orci bibendum aliuet. A enean adipiscing congue mi a fringilla. Suspendisse placerat arcu ac est pharetra sit amet pretium ante. </p>
          </li>
          <li>
            <h2>Make them Behave</h2>
            <p> Ut gravida lacus eget orci bibendum aliuet. A enean adipiscing congue mi a fringilla. Suspendisse placerat arcu ac est pharetra sit amet pretium ante. porta. Duis risus augue, sollicitudin sit amet enim. </p>
          </li>
          <li>
            <h2>Food tht They Need</h2>
            <p> Donec a purus sit amet risus consectetur lacinia et ut libero. Vestibulum tempus fauscibus sagittis. Ut gravida lacus eget orci bibendum aliuet. A enean adipiscing congue mi a fringilla. Suspendisse placerat arcu ac est pharetra sit amet pretium ante. </p>
          </li>
          <li>
            <h2>Do's and Don'ts</h2>
            <p> Ut gravida lacus eget orci bibendum aliuet. A enean adipiscing congue mi a fringilla. Suspendisse placerat arcu ac est pharetra sit amet pretium ante. porta. Duis risus augue, sollicitudin sit amet enim. </p>
          </li>
          <li>
            <h2>Pet Foods</h2>
            <p> Donec a purus sit amet risus consectetur lacinia et ut libero. Vestibulum tempus fauscibus sagittis. Ut gravida lacus eget orci bibendum aliuet. A enean adipiscing congue mi a fringilla. Suspendisse placerat arcu ac est pharetra sit amet pretium ante. </p>
          </li>
          <li>
            <h2>healthy Recipes for Pets</h2>
            <p> Ut gravida lacus eget orci bibendum aliuet. A enean adipiscing congue mi a fringilla. Suspendisse placerat arcu ac est pharetra sit amet pretium ante. porta. Duis risus augue, sollicitudin sit amet enim. </p>
          </li>
        </ul>
        <div className="paging"> <a className="active" href="#">1</a> <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a className="next" href="#">NEXT</a> </div>
      </div>
      <div id="sidebar">
        <div id="section">
          <div>
            <div>
              <h2>Pet Guide Overview</h2>
              <ul>
                <li><a href="#">Pet Trainging Guides <span>(1)</span> </a></li>
                <li><a href="#">Behavior Training <span>(11)</span> </a></li>
                <li><a href="#">Pet Recipes <span>(3)</span> </a></li>
                <li><a href="#">Do's and Don'ts <span>(8)</span> </a></li>
                <li><a href="#">Pet Foods <span>(3)</span> </a></li>
                <li><a href="#">Cosplay Pets <span>(2)</span> </a></li>
                <li><a href="#">Shopping Guides <span /> </a></li>
                <li><a href="#">Pregnancy and Nursing Pets <span>(8)</span> </a></li>
                <li><a href="#">Medications <span>(7)</span> </a></li>
                <li><a href="#">Excercise <span>(7)</span> </a></li>
                <li><a href="#">Diet <span>(10)</span> </a></li>
                <li><a href="#">Grooming <span>(1)</span> </a></li>
                <li><a href="#">Cosplay Pets <span>(2)</span> </a></li>
                <li><a href="#">Shopping Guides <span /> </a></li>
                <li><a href="#">Pregnancy and Nursing Pets <span>(8)</span> </a></li>
                <li><a href="#">Medications <span>(7)</span> </a></li>
                <li><a href="#">Excercise <span>(7)</span> </a></li>
                <li><a href="#">Diet <span>(10)</span> </a></li>
                <li><a href="#">Grooming <span>(1)</span> </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="featured">
      <ul>
        <li><a href="#"><img src="/front/src/images/organic-and-chemical-free.jpg" width={300} height={90} alt /></a></li>
        <li><a href="#"><img src="/front/src/images/good-food.jpg" width={300} height={90} alt /></a></li>
        <li className="last"><a href="#"><img src="/front/src/images/pet-grooming.jpg" width={300} height={90} alt /></a></li>
      </ul>
    </div>
  </div>
  <div id="footer">
    <div className="section">
      <ul>
        <li> <img src="/front/src/images/friendly-pets.jpg" width={240} height={186} alt />
          <h2><a href="#">Friendly Pets</a></h2>
          <p> Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed diam nonummy nib. <a className="more" href="#">Read More</a> </p>
        </li>
        <li> <img src="/front/src/images/pet-lover2.jpg" width={240} height={186} alt />
          <h2><a href="#">How dangerous are they</a></h2>
          <p> Lorem ipsum dolor sit amet, cons ectetuer adepis cing, sed diam euis. <a className="more" href="#">Read More</a> </p>
        </li>
        <li> <img src="/front/src/images/healthy-dog.jpg" width={240} height={186} alt />
          <h2><a href="#">Keep them healthy</a></h2>
          <p> Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed diam nonu mmy. <a className="more" href="#">Read More</a> </p>
        </li>
        <li>
          <h2><a href="#">Love...love...love...pets</a></h2>
          <p> Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed diameusim. <a className="more" href="#">Read More</a> </p>
          <img src="/front/src/images/pet-lover.jpg" width={240} height={186} alt /> </li>
      </ul>
    </div>
    <div id="footnote">
      <div className="section">Copyright © 2012 <a href="#">Company Name</a> All rights reserved | Website Template By <a target="_blank" href="http://www.freewebsitetemplates.com/">freewebsitetemplates.com</a></div>
    </div>
  </div>
</div>


    );
};

export default petguide;