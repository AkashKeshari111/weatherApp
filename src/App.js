import logo from "./logo.svg";
import "./App.css";
import { Box, Container, LinearGradient } from "@chakra-ui/react";
import Searchbar from "./Components/Searchbar";
import Forcaste from "./Components/Forcaste";
import { useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <Box
      p={4}
      w="100%"
      h={{base:"175vh",md:"100vh"}}
      bgImage="linear-gradient(145deg, rgba(238,245,18,0.8), rgba(49,130,206,0.6))"
      fontFamily="Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif"
    >
      <Searchbar
        weatherData={weatherData}
        setWeatherData={setWeatherData}
        loading={loading}
        setLoading={setLoading}
      />
      <Forcaste
          weatherData={weatherData}
          setWeatherData={setWeatherData}
          loading={loading}
          setLoading={setLoading}
      />
    </Box>
  );
}

export default App;
