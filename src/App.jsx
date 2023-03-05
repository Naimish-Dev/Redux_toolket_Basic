import "./App.css";
import Navbar from "./Component/Navbar";
import UserData from "./Component/UserData";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Stack sx={{ bgcolor: "white", textAlign: "center" }}>
          <p> Well-Come to over App</p>
          <h1> ADMIN TABLE</h1>
          <p> One destnation foe Web Development</p>
        </Stack>
        <Box sx={{ bgcolor: "#cfe8fc", border: "1px solid #039be5" }}>
          <Navbar />
        </Box>
        <UserData />
      </Container>
    </>
  );
}

export default App;
