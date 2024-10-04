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
    title: "George Mason University",
    date: "2020.9.01 ~ Present",
    contents: "Computer Game Design Major",
  },
  {
    title: "University of South Pacific",
    date: "2016.02.01 ~ 2017.12.10",
    contents: "Foundation Science Course",
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
                      style: { fontSize: "20px" },
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
