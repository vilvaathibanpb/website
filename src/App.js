import React from "react";
import styled from "styled-components";
import logo from "./assets/logo.png";
import image from "./assets/img.png";
import linkedin from "./assets/linkedin.png";
import medium from "./assets/medium.png";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 18px;
  height: 18px;
`;

const Icon = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  padding: 5px;
  margin-left: 30px;
  margin-top: 40px;
`;

const H3 = styled.div`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 48px;
  text-align: center;
  color: #252c54;
  margin-top: 5vh;
`;

const P = styled.p`
  position: fixed;
  bottom: 0;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 24px;
  text-align: center;
  color: #252c54;
`;

function App() {
  return (
    <Container>
      <div style={{ marginBottom: "7vh" }}>
        <img src={logo} alt="product ride logo" />
      </div>
      <div>
        <img src={image} alt="Launching soon" />
      </div>
      <div>
        <H3>Buckle up. We are preparing for launch.</H3>
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <a href="https://medium.com/product-ride" target="_blank">
          <Icon>
            <Image src={medium} alt="product ride medium" />
          </Icon>
        </a>
        <a href="https://www.linkedin.com/company/product-ride" target="_blank">
          <Icon>
            <Image src={linkedin} alt="product ride linkedin" />
          </Icon>
        </a>
      </div>
      <P>
        Being made with <span style={{ color: "#FF4133" }}>❤</span> ️ in Germany
      </P>
    </Container>
  );
}

export default App;
