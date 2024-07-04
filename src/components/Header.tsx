import Box from "@mui/material/Box";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "md",
        margin: "0 auto",
        padding: "16px 0",
        textAlign: "center",
        h1: { color: "#399fac" },
      }}
    >
      <h1>{title}</h1>
    </Box>
  );
};

export default Header;
