import React from "react";
import Button from "@mui/material/Button";

const TwoButton = ({ text, setOption }) => {
  const handleSetOption = () => {
    if (text === "Yes") {
      setOption(true);
    } else {
      setOption(false);
    }
  };
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={{
          px: 3,
          m: 2,
        }}
        onClick={handleSetOption}
      >
        {text}
      </Button>
    </>
  );
};

export default TwoButton;
