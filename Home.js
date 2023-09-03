
      import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <>
      <div className="title">
      
      <p id="same"> EnigmaSnap</p>
      <p id="sames">Be secure,keep sharing!</p>
   
     </div>
   
   
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
 <div className="container-fluid">
   <a className="navbar-brand"  href="/" >Home</a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     <li className="nav-item">
         <a className="nav-link" aria-current="page" href="/sharpen">Sharpen Image</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" aria-current="page" href="/blur">Blur Image</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/gray">Gray Scale Image</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" aria-current="page" href="/invert">Invert Image(Colors)</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" aria-current="page" href="/lighten">Lighten Photo</a>
       </li>
       
       <li className="nav-item " >
         <a className="nav-link" aria-current="page" href="#">Help</a>
       </li>
       
     </ul>
     
     
   </div>
 </div>
</nav>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<div id="encr" ><a id="enc" href="/Encryption" >Let's Start Encrypting</a></div>
<br></br>
<br></br>
<div id="decr" ><a id="dec" href="/Decryption">Let's Start Decrypting</a></div>
<div id="cyber">
      <img src="https://vitbhopal.ac.in/file/2022/04/Cyber-Security1.jpg" height="368" />
    </div>
      </>
    </div>
  )
}

export default Home;
