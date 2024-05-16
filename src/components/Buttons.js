import React from "react";

class Buttons extends React.Component{
  render(){
      return (
    <div className="Buttons">
    <div className="Button_1">
      <button className="Button1">TOPS</button>
    </div>
    <div className="Button_2">
      <button className="Button2">BOTTOMS</button>
    </div>
    <div className="Button_3">
      <button className="Button3">ROOMPERS</button>
    </div>
    <div className="Button_4">
      <button className="Button4">HATS</button>
    </div>
    <div className="Button_5">
      <button className="Button5">ALL COLLECTION</button>
    </div>
    </div>
  );
  }
}

export default Buttons;