import { GitHub } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Title from "./Title";
import projectWaterMelon from "../assets/images/projects/WaterMelon.gif";
import projectVR from "../assets/images/projects/VR.gif";
import projectAR from "../assets/images/projects/AR.gif";
import projectDoran from "../assets/images/projects/Doran.gif";
import projectUnreal from "../assets/images/projects/Unreal.gif";


const useStyles = makeStyles({
  halfScreenStyle: {
    flexDirection: "column",
  },
  fullScreenStyle: {},
});

type ProjectType = {
  title: string;
  date: string;
  gifUrl: string;
  description: string;
  githubUrl: string;
  projectUrl: string;
};

const projects: ProjectType[] = [
  {
    title: "Overcooked (Overcook Clone)",
    date: "Sep,2024 - Present",
    gifUrl:
      "https://user-images.githubusercontent.com/14011726/94132137-7d4fc100-fe7c-11ea-8512-69f90cb65e48.gif",
    description:
      "Engine/Language: Unity, C#\nTeam Size: 34\nProject Overview: Overcook clone set in George Mason University.\nRole: UI Lead\nKey Contributions: Designed an expandable structure using strategy patterns to handle frequent updates. Managed all game assets via the Resources folder.",
    githubUrl: "https://www.naver.com",
    projectUrl: "",
  },
  {
    title: "Doran Doran Adventure",
    date: "Apr,2024 - Aug,2024",
    gifUrl: projectDoran,
    description:
      "Engine/Language: Unity, C#\nTeam Size: 1\nProject Overview: Mobile game in the vampire survivor genre.\nRole: Solo Developer\nKey Contributions: Reduced scene complexity with minimal object placement and code-based controls. Managed assets via Addressables, implemented monster waves with boss summoning.",
    githubUrl: "https://github.com/DahyeChung/DoranDoran",
    projectUrl: "",
  },
  {
    title: "Watermelon Game (Christmas Edition)",
    date: "Dec,2023 - Jan,2024",
    gifUrl: projectWaterMelon,
    description:
      "Engine/Language: Unity, C#\nTeam Size: 3\nProject Overview: A mobile merge game inspired by Nintendo’s Suika Game, with a Christmas theme.\nRole: Developer\nKey Contributions: Developed object merging interactions, managed multiple objects using scriptable objects, and built a preview system for upcoming objects.",
    githubUrl: "https://github.com/DahyeChung/Watermelon_Game",
    projectUrl: "",
  },
  {
    title: "Purito Beauty Filter",
    date: "Sep,2023 - Oct,2023",
    gifUrl: projectAR,
    description:
      "Engine/Language: Spark AR Studio, Blueprint\nTeam Size: 3\nProject Overview: Instagram filter promoting Purito's cosmetics.\nRole: Developer\nKey Contributions: Created an interactive filter highlighting the product’s antibacterial properties using gamification.",
    githubUrl: "N/A",
    projectUrl: "",
  },
  {
    title: "VR Mason Metro",
    date: "Sep,2023 - Nov,2023",
    gifUrl: projectVR,
    description:
      "Engine/Language: Unity, C#, Meta Quest 3, Open XR\nTeam Size: 3\nProject Overview: VR tour game teaching international students how to navigate Korea's subway system.\nRole: Developer\nKey Contributions: Developed immersive UI elements, using 360 footage for subway navigation.",
    githubUrl: "https://github.com/DahyeChung/VR-MasonMetro-2023.10",
    projectUrl: "",
  },
  {
    title: "Unreal Swim Game",
    date: "Apr,2023 - Jun,2023",
    gifUrl: projectUnreal,
    description:
      "Engine/Language: Unreal Engine 5, Blueprint\nTeam Size: 3\nProject Overview: A simple collecting game in Unreal.\nRole: Developer for player movement, animation, and shooting system.\nKey Contributions: Implemented IK rigging, created a switchable first/third-person shooting system, added underwater sound effects.",
    githubUrl: "https://dev.azure.com/dchung28/CCL_C_SEA",
    projectUrl: "",
  },
];

function Projects() {
  const classes = useStyles();
  const isHalfScreen = useMediaQuery("(max-width:900px)");
  const isTextBreak = useMediaQuery("(max-width:385px)");
  return (
    <Box py="1.5rem" mb="5rem" id="projects" bgcolor="#ebf5ff">
      <Container>
        <Title title="Projects" mb="1.5rem" />
        {projects.map(
          ({ title, date, gifUrl, description, githubUrl, projectUrl }) => {
            return (
              <Card
                /* 
              ✏️ elevation 값으로 프로젝트 카드 shadow 조절이 가능해요!
              값이 작을수록 연해져요
              */

                elevation={5}
                key={title}
                sx={{ marginBottom: "2rem", position: "relative" }}
              >
                <CardHeader
                  sx={{ textAlign: "center" }}
                  title={title}
                  subheader={date}
                />
                <Box
                  className={
                    isHalfScreen
                      ? classes.halfScreenStyle
                      : classes.fullScreenStyle
                  }
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CardMedia
                    component="img"
                    // ✏️ gif 사이즈 설정
                    width="500px"
                    height="500px"
                    image={gifUrl}
                    alt="project-gif"
                    sx={{
                      maxWidth: "500px",
                      padding: "1.2rem",
                      borderRadius: "5%",
                    }}
                  />
                  <CardContent
                    sx={{
                      overflow: "auto",
                      scrollY: "auto",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      // gif 사이즈와 동일한 값 설정
                      height: "500px",
                    }}
                  >
                    <Typography
                      sx={{
                        overflow: "auto",
                      }}
                      mb="1.2rem"
                      variant="body1"
                    >
                      {description}
                    </Typography>
                    <Divider sx={{ marginBottom: "1rem" }} />
                    {/* 아이콘 버튼 시작 */}
                    <Box>
                      <Link
                        mr="1em"
                        target="_blank"
                        rel="noreferrer"
                        href={githubUrl}
                      >
                        <Button
                          color="info"
                          variant="outlined"
                          sx={{ marginBottom: isTextBreak ? "0.5rem" : "0" }}
                          startIcon={
                            <GitHub
                              fontSize="large"
                              style={{ color: "black" }}
                            />
                          }
                        >
                          Github
                        </Button>
                      </Link>
                      <Link target="_blank" rel="noreferrer" href={projectUrl}>
                        <Button
                          // sx={{ marginBottom: isHalfScreen ? "0.5rem" : "0" }}
                          variant="outlined"
                          startIcon={
                            <OpenInNewIcon
                              fontSize="large"
                              style={{ color: "black" }}
                            />
                          }
                        >
                          Detail
                        </Button>
                      </Link>
                    </Box>
                    {/* 아이콘 버튼 끝 */}
                  </CardContent>
                </Box>
              </Card>
            );
          }
        )}
      </Container>
    </Box>
  );
}

export default Projects;
