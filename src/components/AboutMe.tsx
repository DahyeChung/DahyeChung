import { Box, Container, Typography } from "@mui/material";
import formalprofile from "../assets/images/formalProfile.jpg";

function AboutMe() {
  return (
    <Box id="about-me">
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          minHeight: "calc(100vh - 56px)",
          position:"relative",
          bottom:"80px",
        }}
      >
        <Typography
          mb="2rem"
          fontWeight="bold"
          // ✏️ textAlight: 텍스트 위치 설정 ex) left, center, right
          textAlign="center"
          variant="h2"
        >
          ABOUT ME
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs:"column-reverse", sm: "column-reverse", md: "row" }}
          alignItems="center"
          justifyContent="center"
          gap="2rem"
        >
          {/* Adjust the maxWidth below to control the width of the text */}
          <Typography variant="h6" maxWidth="500px" flex="1">
            <span style={{ fontSize: "2.1em" }}>Dahye Chung</span> is a
            passionate and seasoned Technical Game Developer, who is based in
            Incheon, South Korea. Her passion for game development began at an
            early age. She later graduated from George Mason University with a
            Bachelor of Computer Game Design in Art and Visual Technology.
          </Typography>
          <div
            style={{
              marginBottom: "1.2rem",
              height: "300px",
              minWidth: "200px",
              backgroundImage: `url(${formalprofile})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "right 35% bottom 75%",
              borderRadius: "10px",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default AboutMe;
