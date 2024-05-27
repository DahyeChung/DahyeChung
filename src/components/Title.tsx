import { Typography, useMediaQuery } from "@mui/material";

interface TitleProps {
  title: string;
  mb?: string;
  color?: string;
}

export default function Title({ title, mb = "0px", color = "#333" }: TitleProps) {
  const isMobile = useMediaQuery("(max-width: 700px)");
  return (
    <Typography
      color={color}
      textAlign="center"
      variant={isMobile ? "h4" : "h2"}
      fontWeight="bold"
      mb={mb}
    >
      {title}
    </Typography>
  );
}
