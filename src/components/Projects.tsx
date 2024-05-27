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

// ✏️ 여기에 프로젝트 콘텐츠를 작성해주세요!
const projects: ProjectType[] = [
  {
    // 게임 이름
    title: "Suika Game",
    // 게임 개발 날짜
    date: "2000.01 - 2000.05",
    // gif 주소
    gifUrl:
      "https://user-images.githubusercontent.com/14011726/94132137-7d4fc100-fe7c-11ea-8512-69f90cb65e48.gif",
    // 게임 설명
    description:
      "이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이 게임은 이렇게 저렇게 합니다이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이 게임은 이렇게 저렇게 합니다이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이 게임은 이렇게 저렇게 합니다이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이 게임은 이렇게 저렇게 합니다이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이 게임은 이렇게 저렇게 합니다이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이 게임은 이렇게 저렇게 합니다이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이 게임은 이렇게 저렇게 합니다이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이 게임은 이렇게 저렇게 합니다이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이 게임은 이렇게 저렇게 합니다이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이 게임은 이렇게 저렇게 합니다이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이 게임은 이렇게 저렇게 합니다이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이 게임은 이렇게 저렇게 합니다이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게저렇게 합니다. 이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게저렇게 합니다. 이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게저렇게 합니다. 이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게저렇게 합니다.",
    // 깃헙 리포 주소
    githubUrl: "https://www.naver.com",
    // 프로젝트 설명 사이트 주소 or 데모 사이트
    projectUrl: "",
  },
  {
    title: "Suika2",
    date: "2000.01 - 2000.05",
    gifUrl:
      "https://user-images.githubusercontent.com/14011726/94132137-7d4fc100-fe7c-11ea-8512-69f90cb65e48.gif",
    description:
      "이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게저렇게 합니다.",
    githubUrl: "",
    projectUrl: "",
  },
  {
    title: "Suika3",
    date: "2000.01 - 2000.05",
    gifUrl:
      "https://user-images.githubusercontent.com/14011726/94132137-7d4fc100-fe7c-11ea-8512-69f90cb65e48.gif",
    description:
      "이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게 저렇게합니다. 이 게임은 이렇게 저렇게 합니다. 이 게임은 이렇게저렇게 합니다.",
    githubUrl: "",
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
                      overflow: "scroll",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      // gif 사이즈와 동일한 값 설정
                      height: "500px",
                    }}
                  >
                    <Typography
                      sx={{
                        overflow: "scroll",
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
                          깃헙 바로가기
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
                          상세 페이지 바로가기
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
