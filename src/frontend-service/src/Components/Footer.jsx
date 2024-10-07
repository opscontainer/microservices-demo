import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          bgcolor: "#7030A0",
          p: 2,
          borderRadius: '15px',
        }}
      >
        <Typography
          variant="body2"
          align="center"
          sx={{ color: "white", fontFamily: "Arial" }}
        >
          &copy; 2024 opscontainer.sh. All rights reserved. <Link to={"https://github.com/opscontainer/microservices-demo"} className="no-underline" style={{ color: "red", fontFamily: "Arial"}}>(GitHub Source Code)</Link>
        </Typography>
      </Box>
    </>
  );
}
