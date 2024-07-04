import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        bgcolor: "#e5e5e5",
        minHeight: "100vh",
        boxSizing: "border-box",
        color: "#38384d",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          p: 2,
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

export default Layout;
