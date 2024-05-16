import React from "react";
import img from "./img.png"
class Img extends React.Component{
  render(){
      return (
    <div className="Img">
        <img className="DopImg" src={img} alt="" />
    </div>
  );
  }
}

export default Img;
