import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: 20,
  },
});

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "#FF6E14",
      },
      track: {
        color: "#FF6E14",
      },
      rail: {
        color: "black",
      },
    },
  },
});

function valuetext(value) {
  return `${value}°C`;
}

const marks = [
  {
    value: 0,
    label: "0",
  },

  {
    value: 15000,
    label: "15,000",
  },
];

export default function Range({handlePrice}) {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 15000]);
  const [show, setShow] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handlePrice(newValue);
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className={classes.root}>
      {console.log(value)}
      <button
        className="btn "
        style={{
          border: "1px solid black",
          borderRadius: "25px",
        }}
        onClick={handleShow}
      >
        Price{" "}
      </button>
      {show && (
        <div
          className="border shadow-sm mt-2"
          style={{
            width: "300px",
            padding: "35px",
            backgroundColor: "white",
          }}
        >
          <Typography id="range-slider" gutterBottom>
            Price range
          </Typography>
          <ThemeProvider theme={muiTheme}>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
              marks={marks}
              min={0}
              max={15000}
            />
          </ThemeProvider>
        </div>
      )}
    </div>
  );
}
