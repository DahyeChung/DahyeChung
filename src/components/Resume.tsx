import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import { ReactElement } from "react";

// import image
import unity from "../assets/icons8-unity-100.png";
import { ArrowCircleRightRounded } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

type ResumeIcon = {
  icon: ReactElement;
};

/*
 ✏️ 
 icon 편집: 로고 다운 사이트 https://icons8.com/icons/set
  icon 사이즈 100x100

*/

const resumeIcons: ResumeIcon[] = [
  {
    icon: <img src={unity} alt="unity" />,
  },
  {
    icon: <img src={unity} alt="unity" />,
  },
  {
    icon: <img src={unity} alt="unity" />,
  },
  {
    icon: <img src={unity} alt="unity" />,
  },
  {
    icon: <img src={unity} alt="unity" />,
  },
  {
    icon: <img src={unity} alt="unity" />,
  },
  {
    icon: <img src={unity} alt="unity" />,
  },
  {
    icon: <img src={unity} alt="unity" />,
  },
  {
    icon: <img src={unity} alt="unity" />,
  },
];

export default function Resume() {
  return (
    <Box id="resume" textAlign="center">
      <Container
        sx={{
          minHeight: "calc(100vh - 120px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" mb="1.5rem" fontWeight="bold">
          Résumé
        </Typography>
        <Typography textAlign="center" variant="body1" mb="1.2rem">
          resume 섹션에 대한 설명.
        </Typography>
        <Button
          color="secondary"
          href="https://dahyemi.notion.site/Dahye-Chung-b1f12508b55c49fc9fc5a002e49bd9b0?pvs=4"
          variant="outlined"
          startIcon={<ArrowCircleRightRounded />}
          sx={{ marginBottom: "1.5rem" }}
        >
          이력서 보기
        </Button>
        <Box textAlign="center">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 6, sm: 8, md: 15 }}
          >
            {resumeIcons.map(({ icon }, index) => (
              <Grid item xs={2} sm={2} md={3} key={index}>
                <Item
                  // ✏️ box shadow 조절, 숫자 값이 작을수록 섀도우 연함.
                  elevation={3}
                >
                  {icon}
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
