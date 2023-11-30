import React from "react";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import Hello from "./App.js";
import pic1 from "./pic1.png";
import bg1 from "./bg1.webp";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const App = () => (
  <div style={styles}>
    <Hello name="Parallax" />
    <Parallax bgImage={bg1} strength={500}>
      <div style={{ height: 500 }}>
        <img src={pic1} alt="bg" />
      </div>
    </Parallax>
    <h2>.</h2>
    <Parallax bgImage={bg1} strength={-100}>
      <div style={{ height: 500 }}></div>
    </Parallax>
    <h2>.</h2>
    <Parallax strength={500}>
      <Background className="custom-bg">
        <div
          style={{
            height: 2000,
            width: 2000,
            backgroundImage: "url('https://i.imgur.com/8CV5WAB.png')"
          }}
        />
      </Background>
      <div>
        <br />
        custom background component
        <br />
        <br />
        custom background component
        <br />
        <br />
        custom background component
        <br />
        <br />
      </div>
    </Parallax>
    <div style={{ height: 500 }} />
  </div>
);

render(<App />, document.getElementById("root"));
