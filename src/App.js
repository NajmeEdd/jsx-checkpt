import React from 'react';
import "./App.css";
import publicImg from "./imageInPublic.jpg";
import srcImg from "./imageInSrc.jpg";


const App = () => {

  return <div>
    <div style={{border:"solid 1px black", maxWidth:"100vw"}}>
    <h1 className=" title red"> najmeddine</h1>

    <br/>
<img src={publicImg} className="image" /> 
<br/> 
<img src={srcImg} className="image" />  
    </div>
    
<div>
<iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/ktfe7d-G4Gs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
  </div>;
}



export default App;