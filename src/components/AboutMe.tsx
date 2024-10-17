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
            <span style={{ fontSize: "2.1em" }}>Dahye Chung</span> 
is a passionate and skilled Technical Game Developer, currently a senior at G
eorge Mason University, where she is completing her Bachelor’s degree in Computer Game 
Design and Art and Visual Technology. With a strong enthusiasm for continuous learning, D
ahye actively creates environments that foster her growth and consistently refines her techni
cal skills to enhance her efficiency. She believes that well-crafted games can transcend mer
e entertainment, shaping perspectives, conveying compelling stories, and creating connectio
ns among people through immersive experiences.
          </Typography>
          <img
            alt="formalprofile"
            style={{
              borderRadius: "10px",
              marginBottom: "1.2rem",
            }}
            width="200px"
            height="270px"
            src={formalprofile}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default AboutMe;
