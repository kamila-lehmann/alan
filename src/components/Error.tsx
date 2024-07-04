import Box from "@mui/material/Box";

const Error = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "md",
        margin: "40px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #ea4335",
        borderRadius: "24px",
        minHeight: "40vh",
        h2: { color: "#ea4335" },
        p: {
          color: "#38384d",
          fontWeight: 500,
        },
      }}
    >
      <h2>Wystąpił błąd podczas pobierania danych</h2>
      <p>Spróbuj ponownie później</p>
    </Box>
  );
};

export default Error;
