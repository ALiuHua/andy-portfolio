import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";

export const Birds = React.memo((props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          birdSize: 0.6,
          separation: 20,
          speedLimit: 6,
          backgroundColor: "#fefaf6",
          color1: 0xff0000,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  if (vantaEffect && props.userTheme === "darkTheme") {
    vantaEffect.setOptions({
      backgroundColor: "#0a192f",
      color1: 0x232e74,
    });
    vantaEffect.restart();
  }
  if (vantaEffect && props.userTheme === "lightTheme") {
    vantaEffect.setOptions({
      backgroundColor: "#fefaf6",
      color1: 0xff0000,
    });
    vantaEffect.restart();
  }

  return (
    <div
      ref={myRef}
      style={{
        position: "fixed",
        height: "100%",
        width: "100%",
        top: "0",
        left: "0",
        zIndex: "0",
      }}
    ></div>
  );
});
