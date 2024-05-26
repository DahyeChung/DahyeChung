import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { School } from "@mui/icons-material";
import { Box, Container } from "@mui/material";

export default function Education() {
  return (
    <Box
      bgcolor="#072931"
      id="education"
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
        <Typography textAlign="center" variant="h2" fontWeight="bold">
          Education
        </Typography>
        <List sx={{ width: "100%" }}>
          {/* 1번 education contents */}
          <ListItem>
            <School
              style={{
                marginRight: "1.2rem",
              }}
            />
            <ListItemText
              primary="00학교"
              secondary={
                <React.Fragment>
                  <Typography
                    // ✏️ 색상 변경
                    color="gray"
                    variant="body2"
                  >
                    {/* ✏️ 날짜 작성 */}
                    00.00.00 - 00.00.00
                  </Typography>
                  <Typography
                    // ✏️ 색상 변경
                    color="white"
                    variant="body2"
                  >
                    {/* ✏️ 활동 작성 */}
                    00학과 전공
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="middle" component="li" />
          {/* 2번 education contents */}
          <ListItem>
            <School
              style={{
                marginRight: "1.2rem",
              }}
            />
            <ListItemText
              primary="00학교"
              secondary={
                <React.Fragment>
                  <Typography
                    // ✏️ 색상 변경
                    color="gray"
                    variant="body2"
                  >
                    {/* ✏️ 날짜 작성 */}
                    00.00.00 - 00.00.00
                  </Typography>
                  <Typography
                    // ✏️ 색상 변경
                    color="white"
                    variant="body2"
                  >
                    {/* ✏️ 활동 작성 */}
                    00학과 전공
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="middle" component="li" />
          {/* 3번 education contents */}
          <ListItem>
            <School
              style={{
                marginRight: "1.2rem",
              }}
            />
            <ListItemText
              primary="00학교"
              secondary={
                <React.Fragment>
                  <Typography
                    // ✏️ 색상 변경
                    color="gray"
                    variant="body2"
                  >
                    {/* ✏️ 날짜 작성 */}
                    00.00.00 - 00.00.00
                  </Typography>
                  <Typography
                    // ✏️ 색상 변경
                    color="white"
                    variant="body2"
                  >
                    {/* ✏️ 활동 작성 */}
                    00학과 전공
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Container>
    </Box>
  );
}
