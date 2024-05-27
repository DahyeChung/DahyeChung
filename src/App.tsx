import * as React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Avatar,
  Fab,
  Link,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { ArrowUpward, Email, GitHub, Phone } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

import profile from "./assets/images/profile.png";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Extracurricular from "./components/Extracurricular";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
  boxShadow: "none",
  flexDirection: "column",
  flexShrink: 0,
}));

interface Props {
  window?: () => Window;
}

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
  {
    title: "Extracurricular",
  },
  {
    title: "Education",
  },
  {
    title: "Resume",
  },
];

export default function App(props: Props) {
  const { window: propWindow } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const scrollToSection = (title: string) => {
    const customWindow = propWindow ? propWindow() : window;
    const element = document.getElementById(
      title.toLowerCase().replace(" ", "-")
    );
    if (element) {
      const offset = document.querySelector("header")?.offsetHeight;
      console.log("offset", offset);
      const elementPosition =
        element.getBoundingClientRect().top + customWindow.pageYOffset;
      customWindow.scrollTo({
        top: elementPosition - (offset || 0),
        behavior: "smooth",
      });
    }
  };

  const drawer = (
    <Box bgcolor="#DEECFC">
      <DrawerHeader>
        <Avatar
          sx={{
            marginTop: "1.2rem",
            width: "200px",
            height: "300px",
            borderRadius: "10px",
          }}
          src={profile}
          variant="square"
        />
        <ListItem>
          <ListItemIcon>
            <Phone />
          </ListItemIcon>
          <ListItemText sx={{ marginLeft: "-15px" }} primary="010-0000-0000" />
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
                target="_blank"
                href="https://github.com/DahyeChung"
              >
                DahyeChung
              </Link>
            }
          />
        </ListItem>
      </DrawerHeader>
      <Divider>🔗</Divider>
      <List sx={{ marginTop: "1.2rem" }}>
        {internalNavigations.map(({ title }) => (
          <ListItem key={title} disablePadding>
            <ListItemButton onClick={() => scrollToSection(title)}>
              <ListItemText sx={{ textAlign: "center" }} primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    propWindow !== undefined ? () => propWindow().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ backgroundColor: "white" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon style={{ color: "black" }} />
          </IconButton>
          <Link href="/" sx={{ textDecoration: "none" }}>
            <Typography color="black" variant="h6" noWrap component="div">
              다혜 포트폴리오
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#DEECFC",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <AboutMe />
        <Projects />
        <Extracurricular />
        <Education />
        <Resume />
        <Footer />
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
    </Box>
  );
}
