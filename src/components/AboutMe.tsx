import { Box, Container, Typography } from "@mui/material";
import profile from "../assets/profile.png";

function AboutMe() {
  return (
    <Box minHeight="100vh" mb="5rem" id="about-me">
      <Container>
        <Typography
          mb="1.2rem"
          fontWeight="bold"
          // ✏️ textAlight: 텍스트 위치 설정 ex) left, center, right
          textAlign="center"
          variant="h2"
        >
          ABOUT ME
        </Typography>
        <Box maxWidth="900px" m="0 auto">
          <div
            style={{
              marginBottom: "1.2rem",
              height: "500px",
              width: "100%",
              backgroundImage: `url(${profile})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "right 35% bottom 75%",
              borderRadius: "10px",
            }}
          />
          <Typography variant="h6">
            Dahye Chung is a passionate and seasoned Technical Game Developer,
            who is based in Incheon, South Korea. Her passion for game
            development began at an early age. She later graduated from George
            Mason University with a Bachelor of Computer Game Design in Art and
            Visual Technology.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutMe;
