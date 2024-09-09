import {
  Typography,
  Box,
  CardContent,
  Container,
  useMediaQuery,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "./flipAnimation.css";
import Title from "./Title";

// import images
import someImg from "../assets/images/profile.png";
// "../assets/images/extraCurricularImages/
// gStar.png";
// puritoCompetition.jpg";
// sparkStudioCapture.png";

/* 
✏️ 데이터 변경해주세요!

* 권장 이미지 사이즈 200px x 300px

데스크탑 사이즈에서 한 번에 보이는 이미지의 개수를 변경하고 싶다면 
아래 배열 imagesForDesktop안의 데이터 개수를 변경하세요.

*/

type CarouselImagesType = {
  title: string;
  description: string;
  imgPath: string;
};

const imagesForDesktop: CarouselImagesType[][] = [
  [
    {
      title: "Spark Studio",
      description: "Beauty Filter Contest",
      imgPath:
        "../assets/images/extraCurricularImages/gStar.png",
    },
    {
      title: "타이틀",
      description: "해당 카드에 대한 설명",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      title: "타이틀",
      description: "해당 카드에 대한 설명",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      title: "타이틀",
      description: "해당 카드에 대한 설명",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
  ],
  [
    {
      title: "타이틀",
      description: "해당 카드에 대한 설명",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },

    {
      title: "타이틀",
      description: "해당 카드에 대한 설명",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      title: "타이틀",
      description: "해당 카드에 대한 설명",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      title: "타이틀",
      description: "해당 카드에 대한 설명",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
  ],
  [
    {
      title: "타이틀",
      description: "해당 카드에 대한 설명",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },

    {
      title: "타이틀",
      description: "해당 카드에 대한 설명",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      title: "타이틀",
      description: "해당 카드에 대한 설명",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
  ],
];

const imagesForMobile: CarouselImagesType[] = [
  {
    title: "타이틀",
    description: "해당 카드에 대한 설명",
    imgPath: someImg,
  },
  {
    title: "타이틀",
    description: "해당 카드에 대한 설명",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    title: "타이틀",
    description: "해당 카드에 대한 설명",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    title: "타이틀",
    description: "해당 카드에 대한 설명",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    title: "타이틀",
    description: "해당 카드에 대한 설명",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    title: "타이틀",
    description: "해당 카드에 대한 설명",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },

  {
    title: "타이틀",
    description: "해당 카드에 대한 설명",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    title: "타이틀",
    description: "해당 카드에 대한 설명",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    title: "타이틀",
    description: "해당 카드에 대한 설명",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    title: "타이틀",
    description: "해당 카드에 대한 설명",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },

  {
    title: "타이틀",
    description: "해당 카드에 대한 설명",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    title: "타이틀",
    description: "해당 카드에 대한 설명",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

function Extracurricular() {
  // screen size
  const isMobile = useMediaQuery("(max-width:720px)");
  return (
    <Box mb="5rem" id="extracurricular">
      <Container
        sx={{
          minHeight: "calc(100vh - 80px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Title title="Extracurricular" />
        <Carousel
          autoPlay={true}
          animation="slide"
          navButtonsAlwaysVisible={true}
          sx={{ width: "100%" }}
        >
          {isMobile
            ? imagesForMobile.map(({ title, description, imgPath }, index) => (
                <Box
                  key={index}
                  display="flex"
                  justifyContent="center"
                  className="flip-card"
                  sx={{
                    marginRight: "8px",
                    maxWidth: "200px",
                    minHeight: "300px",
                    margin: "auto",
                  }}
                >
                  <Box className="flip-card-inner">
                    <Box className="flip-card-front">
                      <img
                        src={imgPath}
                        alt={title}
                        style={{
                          maxWidth: "100%",
                          height: "100%",
                        }}
                      />
                    </Box>
                    {/* 카드 뒷면 시작 */}
                    <Box className="flip-card-back">
                      <CardContent>
                        <Typography variant="h5" component="div" color="white">
                          {title}
                        </Typography>
                        <Typography variant="body2" color="white">
                          {description}
                        </Typography>
                      </CardContent>
                    </Box>
                  </Box>
                  {/* 카드 뒷면 끝*/}
                </Box>
              ))
            : imagesForDesktop.map((chunk, index) => (
                <Box key={index} display="flex" justifyContent="center" mb={2}>
                  {chunk.map(({ title, description, imgPath }, subIndex) => (
                    <Box
                      key={subIndex}
                      className="flip-card"
                      sx={{
                        marginRight: "8px",
                        maxWidth: "200px",
                        minHeight: "300px",
                      }}
                    >
                      <Box className="flip-card-inner">
                        <Box className="flip-card-front">
                          <img
                            src={imgPath}
                            alt={title}
                            style={{
                              maxWidth: "100%",
                              height: "100%",
                            }}
                          />
                        </Box>
                        {/* 카드 뒷면 시작 */}
                        <Box className="flip-card-back">
                          <CardContent>
                            <Typography
                              variant="h5"
                              component="div"
                              color="white"
                            >
                              {title}
                            </Typography>
                            <Typography variant="body2" color="white">
                              {description}
                            </Typography>
                          </CardContent>
                        </Box>
                      </Box>
                      {/* 카드 뒷면 끝*/}
                    </Box>
                  ))}
                </Box>
              ))}
        </Carousel>
      </Container>
    </Box>
  );
}

export default Extracurricular;
