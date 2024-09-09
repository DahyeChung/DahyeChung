import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { School } from "@mui/icons-material";
import { Box, Container } from "@mui/material";
import Title from "./Title";

type EducationsType = {
  title: string;
  date: string;
  contents: string;
};

// ✏️ education 데이터 수정
const educations: EducationsType[] = [
  {
    title: "George Mason University, USA",
    date: "09.01.2020 ~ Present",
    contents: "BFA Computer Game Design",
  },
  {
    title: "University Of South Pacific, Fiji",
    date: "20.02.2017 ~ 20.02.2017",
    contents: "Foundation Science",
  },
  {
    title: "Sacred Heart College, Fiji",
    date: "01.02.2013 ~ 01.12.2016",
    contents: "Secondary School",
  },

];

export default function Education() {
  return (
    <Box
      bgcolor="#072931"
      id="education"
      mb="5rem"
      sx={{
        "&": {
          color: "white",
        },
      }}
    >
      <Container
        sx={{
          minHeight: "calc(100vh - 60px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Title title="Education" color="white" />
        <List sx={{ width: "100%" }}>
          {educations.map(({ title, date, contents }, idx) => {
            return (
              <Box key={`${title}-${idx}`}>
                <ListItem>
                  <School
                    style={{
                      marginRight: "1.2rem",
                    }}
                  />
                  <ListItemText
                    primary={title}
                    primaryTypographyProps={{
                      component: "h3",
                      style: { fontSize: "30px" },
                    }}
                    secondary={
                      <React.Fragment>
                        <Typography
                          // ✏️ 색상 변경
                          color="gray"
                          /* 
                          ✏️
                          크기 조절 variant
                          h1 > h2 > h3 > h4 > h5 > h6
                          body1 > body2 
                          */
                          variant="body1"
                          component="span"
                          display="block"
                        >
                          {date}
                        </Typography>
                        <Typography
                          // ✏️ 색상 변경
                          color="white"
                          variant="body1"
                          component="span"
                        >
                          {contents}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="middle" component="li" />
              </Box>
            );
          })}
        </List>
      </Container>
    </Box>
  );
}
