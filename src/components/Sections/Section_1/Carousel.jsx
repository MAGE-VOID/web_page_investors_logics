import React from "react";
import styled, { keyframes, css } from "styled-components";

function App() {
  const logos = [
    "/Logos/Logos_Web/logo_onnx.png",
    "/Logos/Logos_Web/logo_myfxbook.png",
    "/Logos/Logos_Web/logo_gemini.png",
    "/Logos/Logos_Web/logo_tensorflow.png",
    "/Logos/Logos_Web/logo_metatrader5.png",
    "/Logos/Logos_Web/logo_openai_white.png",
    "/Logos/Logos_Web/logo_python.png",
  ];

  const appContainerStyle = {
    width: "100%",
    minWidth: "550px",
    height: "100vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const wrapperStyle = {
    width: "90%",
    maxWidth: "1200px",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const marqueeStyle = {
    display: "flex",
    width: "100%",
    overflow: "hidden",
    userSelect: "none",
    maskImage:
      "linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 40%, hsl(0 0% 0% / 1) 60%, hsl(0 0% 0% / 0))",
  };

  const imageGroupStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80px",
    height: "80px",
    padding: "20px",
    filter: "grayscale(1%)",
  };

  return (
    <div style={appContainerStyle}>
      <div style={wrapperStyle}>
        <div style={marqueeStyle}>
          <MarqueeGroup>
            {logos.map((src, index) => (
              <div key={`logo-${index}`} style={imageGroupStyle}>
                <img
                  src={src}
                  alt={`Logo ${index + 1}`}
                  width={300}
                  height={300}
                  loading="eager"
                />
              </div>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {logos.map((src, index) => (
              <div key={`logo-${index}`} style={imageGroupStyle}>
                <img
                  src={src}
                  alt={`Logo Copy ${index + 1}`}
                  width={300}
                  height={300}
                  loading="eager"
                />
              </div>
            ))}
          </MarqueeGroup>
        </div>
      </div>
    </div>
  );
}

export default App;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 55s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
