import React from 'react';
import './App.css';
import myImage from "./imageInSrc.jpg"

function App() {
  return (
    <div className="container"> 
      <div style={{border:"solid",'1px' : "black" ,maxWidth:'100vw'}}/>

       <h1 className="title red">Belguesmi Henda</h1> 
       <br />
       <img className="img" src={"imageInPublic.jpg"} alt='Myimage' />
       <br />
       <div className="container"> 
      <div style={{border:"solid",'1px' : "black" ,maxWidth:'100vw'}}/>
      <img className="img" src={myImage}  />
x      <div>
          <iframe className='video' src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'/>
          </div>
    </div>
          </div>
          );
}

export default App;
