import { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import "leaflet/dist/leaflet.css";
import "proj4leaflet";
import Header from "./components/Header";
import Map from "./components/Map";

function App() {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Header />
      <Map />
    </Box>
  );
}

export default App;
