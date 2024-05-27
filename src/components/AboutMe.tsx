import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import formalprofile from "../assets/images/formalProfile.jpg";
import Title from "./Title";

function AboutMe() {
  return (
    <Box marginTop="80px" id="about-me" mb="5rem">
      <Container
        sx={{
          minHeight: "calc(100vh - 56px)",
          position: "relative",
          top: "40px",
        }}
      >
        <Title mb="2rem" title="ABOUT ME" />
        <Box
          display="flex"
          flexShrink={1}
          flexDirection={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
          }}
          alignItems="center"
          justifyContent="center"
          gap="2rem"
        >
          {/* Adjust the maxWidth below to control the width of the text */}
          <Typography variant="h6" maxWidth="500px" flex={1}>
            <span style={{ fontSize: "2.1em" }}>Dahye Chung</span> is a
            passionate and seasoned Technical Game Developer, who is based in
            Incheon, South Korea. Her passion for game development began at an
            early age. She later graduated from George Mason University with a
            Bachelor of Computer Game Design in Art and Visual Technology.
          </Typography>
          <img
            alt="formalprofile"
            style={{
              borderRadius: "10px",
              marginBottom: "1.2rem",
            }}
            width="200px"
            height="300px"
            src={formalprofile}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default AboutMe;
