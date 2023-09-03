import React from 'react';
import './Decryption.css';

const decryption = () => {
  return (
    
       <div>
       <div className="title">
      <p id="sames">Decryption by</p>
      <p id="same"> EnigmaSnap</p>
      
   
     </div>
   
   
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
 <div className="container-fluid">
   <a className="navbar-brand" href="/">Home</a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     <li className="nav-item">
         <a className="nav-link" aria-current="page" href="#">Files</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" aria-current="page" href="#">Edit</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">Draw</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" aria-current="page" href="#">Borders</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" aria-current="page" href="#">Filters</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" aria-current="page" href="#">Adjust</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" aria-current="page" href="#">Effects</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" aria-current="page" href="#">Art</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" aria-current="page" href="#">Animation</a>
       </li>
       <li className="nav-item dropdown">
         <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Dropdown
         </a>
         <ul className="dropdown-menu">
           <li><a className="dropdown-item" href="#">Action</a></li>
           <li><a className="dropdown-item" href="#">Another action</a></li>
           <li><hr className="dropdown-divider"></hr></li>
           <li><a className="dropdown-item" href="#">Something else here</a></li>
         </ul>
       </li>
       <li className="nav-item " >
         <a className="nav-link" aria-current="page" href="#">Help</a>
       </li>
       
     </ul>
     
     <form className="d-flex" role="search">
       <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       <button className="btn btn-outline-success" type="submit">Search</button>
     </form>
   </div>
 </div>
</nav>
<br></br>
<br></br>
<div id="text">Add image</div>
<br></br>
<br></br>
<br></br>
<br></br>

<div id="imen">
    <div id="img">Add image to decrypt</div>
    <div id="res">Decrypted Image</div>
    </div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<div id="text">Enter key</div>

<div id="key">
    <div id="emp"></div>
    <div id="go">Decrypt</div>
    <div id="down">Download</div>
    </div>
    <div id="cybers">
      <img src="https://vitbhopal.ac.in/file/2022/04/Cyber-Security1.jpg" height="368" />
    </div> 
    </div>
  )
}

export default decryption;
