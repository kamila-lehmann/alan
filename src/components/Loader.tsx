import Box from "@mui/material/Box";

const Loader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "md",
        margin: "40px auto",
        display: "flex",
        justifyContent: "center",
        minHeight: "40vh",
      }}
    >
      <h2>Ładowanie danych...</h2>
    </Box>
  );
};

export default Loader;
