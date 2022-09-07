import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Spinner({ color }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress
        style={{ color: color, width: "48px", height: "48px" }}
      />
    </Box>
  );
}
