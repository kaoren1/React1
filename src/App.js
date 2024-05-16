import './App.css';
import React from "react";
import Text from "./components/Text";
import Img from "./components/Img";
import Buttons from "./components/Buttons";

class App extends React.Component{s
  render(){
      return (
    <div className="App">
        <Text/>
        <Img/>
        <Buttons/>
    </div>
  );
  }
}

export default App;
