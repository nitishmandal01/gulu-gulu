import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";

const Buttons = () => {
  const theme = useTheme();

  const [randomIndex, setRandomIndex] = useState(0);

  const [buttonPosition, setButtonPosition] = useState({
    x: "",
    y: "",
  });

  let buttonArr = [
    "No",
    "hahaha",
    "haha Catch me",
    "You can do it!",
    "Let's go",
  ];

  const handleClick = () => {
    // Define the radius of the circular motion
    const radius = 200; // Adjust as needed
    const centerX = 150; // Center of the circular motion
    const centerY = 250; // Center of the circular motion
    const minDistanceFromCenter = 50; // Minimum distance from the center

    let x, y;

    do {
      // Generate a random angle (in radians) between 0 and 2*pi (a full circle)
      const randomAngle = Math.random() * Math.PI * 2;

      // Calculate a random radius (distance from the center)
      // that keeps the position within a circular motion but outside the excluded circular area
      const randomRadius =
        Math.sqrt(Math.random()) * (radius - minDistanceFromCenter) +
        minDistanceFromCenter;

      // Calculate x and y coordinates based on the random angle and radius
      x = Math.cos(randomAngle) * randomRadius + centerX;
      y = Math.sin(randomAngle) * randomRadius + centerY;

      // Repeat if the generated position is within the excluded circular area
    } while (
      (x - centerX) ** 2 + (y - centerY) ** 2 <
      minDistanceFromCenter ** 2
    );

    // Set the button position
    setButtonPosition({ x, y });
    setRandomIndex(Math.floor(Math.random() * (buttonArr.length - 1)) + 1);
  };

  const onMouseLeave = () => {
    // console.log("RandomIndex: ", randomIndex);
  };

  return (
    <Button
      sx={{
        px: 3,
        m: 2,
        ":active": {
          outline: "none",
        },
        ":hover": {
          outline: "none",
        },
        // color: theme.palette.primary.light,
        // borderColor: theme.palette.primary.light,
        position: "absolute",
        top: `${buttonPosition.y}px`,
        left: `${buttonPosition.x}px`,
        transition: "all",
        transitionDuration: "200ms",
      }}
      variant="contained"
      color="primary"
      onClick={handleClick}
    >
      {buttonArr[randomIndex]}
    </Button>
  );
};

export default Buttons;
