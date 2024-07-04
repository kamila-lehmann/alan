import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

interface ButtonProps {
  path: string;
  content: string;
  size?: string;
  margin?: string;
}

const AppButton = ({ path, content, size, margin }: ButtonProps) => {
  return (
    <Button
      variant="contained"
      sx={{
        size: size,
        margin: margin,
        bgcolor: "#399fac",
        ":hover": { bgcolor: "#38384d" },
        a: { color: "white", textDecoration: "none" },
      }}
    >
      <Link to={path}>{content}</Link>
    </Button>
  );
};

export default AppButton;
