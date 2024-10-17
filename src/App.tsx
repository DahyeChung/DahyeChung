import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import {
  Email,
  GitHub,
  Phone,
  Menu,
  ChevronLeft,
  ChevronRight,
  ArrowUpward,
} from "@mui/icons-material";

import { ThemeProvider } from "@emotion/react";

import {
  Drawer,
  Box,
  Divider,
  Typography,
  List,
  Toolbar,
  Container,
  ListItemText,
  ListItemButton,
  ListItem,
  IconButton,
  Avatar,
  ListItemIcon,
  Link,
  createTheme,
  Fab,
} from "@mui/material";

import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
// import Extracurricular from "./components/Extracurricular";
import Education from "./components/Education";
// import Resume from "./components/Resume";

import profile from "./assets/images/profile.png";
import Footer from "./components/Footer";

const drawerWidth = 240;

const typoTheme = createTheme({
  typography: {
    fontFamily: [
      "GmarketSans", // Use Gmarket Sans here
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,

  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
  boxShadow: "none",
}));

type navigationType = {
  title: string;
  to?: string;
  href?: string;
};

// ✏️ navigation 데이터 편집
// TODO : 메인 페이지 컨텐츠 순서 변경
const internalNavigations: navigationType[] = [
  {
    title: "About Me",
  },
  {
    title: "Projects",
  },
  // {
  //   title: "Extracurricular",
  // },
  {
    title: "Education",
  },
  // {
  //   title: "Resume",
  //  },
 
];

export default function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true); // 네비게이션 바 디폴트 상태 

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const scrollToSection = (title: string) => {
    const element = document.getElementById(
      title.toLowerCase().replace(" ", "-")
    );
    if (element) {
      const offset = document.querySelector("header")?.offsetHeight;
      console.log("offset", offset);
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - (offset || 0),
        behavior: "smooth",
      });
    }
  };

  return (
    <ThemeProvider theme={typoTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar elevation={0} position="fixed" open={open}>
          <Toolbar sx={{ backgroundColor: "white" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <Menu style={{ color: "black" }} />
            </IconButton>
            <Link href="#" sx={{ textDecoration: "none" }}>
              <Typography color="black" variant="h6" noWrap component="div">
                Unity Game Developer 
              </Typography>
            </Link>
          </Toolbar> 
        </AppBar>
        {/* 왼쪽 네비게이션 영역 시작 */}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#DEECFC",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader sx={{ display: "flex", flexDirection: "column" }}>
            <IconButton
              sx={{ alignSelf: "flex-end", margin: "0.5rem 0" }}
              onClick={handleDrawerClose}
            >
              {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
            <Avatar
              sx={{ width: "200px", height: "300px", borderRadius: "10px" }}
              src={profile}
              variant="square"
            />
            <ListItem>
              <ListItemIcon>
                <Phone />
              </ListItemIcon>
              <ListItemText
                sx={{ marginLeft: "-15px" }}
                primary="(571)5877328"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              <ListItemText
                sx={{ marginLeft: "-15px" }}
                primary={
                  <Link
                    sx={{
                      textDecoration: "none",
                      color: "black",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                    href="mailto:dchung28@gmu.edu"
                  >
                    dchung28@gmu.edu
                  </Link>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <GitHub />
              </ListItemIcon>
              <ListItemText  // 깃허브 이름
                sx={{ marginLeft: "-15px" }}
                primary={
                  <Link
                    sx={{
                      textDecoration: "none",
                      color: "black", // 이름
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                    href="https://github.com/DahyeChung"
                  >
                    DahyeChung
                  </Link>
                }
              />
            </ListItem>
          </DrawerHeader>
          <Divider></Divider>
          <List sx={{ marginTop: "1.2rem" }}>
            {internalNavigations.map(({ title }) => (
              <ListItem key={title} disablePadding>
                <ListItemButton onClick={() => scrollToSection(title)}>
                  {/* // 네비게이션 컬러변경  */}
                  <ListItemText

                   primaryTypographyProps={{ textAlign: "center", color: "#19335A", fontWeight: 'bold'}}
                    primary={title} /> 
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
              {/* 왼쪽 네비게이션 끝 */}
              {/* ✏️ TODO : 페이지 컨텐츠 순서 수정*/}
        <Main open={open}>
          <DrawerHeader />
            <AboutMe />
            <Projects />
            <Education />
          <Footer />
        </Main>
      </Box>
      <Fab
        onClick={() => {
          scrollToSection("about-me");
        }}
        sx={{
          position: "fixed",
          bottom: "1.2rem",
          right: "1.2rem",
          // ✏️ 하단 floating button의 icon 색 변경
          color: "white",
          // ✏️ 하단 floating button의 배경 색 변경
          backgroundColor: "#3A6191",
          "&:hover": {
            backgroundColor: "#4e82c2",
          },
        }}
      >
        <ArrowUpward />
      </Fab>
    </ThemeProvider>
  );
}
