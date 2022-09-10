import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "black",
    color: "white",
    fontSize: "16px",
    marginTop: "0!important",
  },
}));

export default function TooltipComponent({ children, title }) {
  return (
    <div>
      <CustomTooltip title={title}>
        <>{children}</>
      </CustomTooltip>
    </div>
  );
}
