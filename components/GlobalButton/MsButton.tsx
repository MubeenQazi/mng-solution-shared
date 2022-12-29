/** @format */

import Button from "@mui/material/Button";
import "./GlobalButton.scss";

const MsButton = ({ text, icon, backgroundColor, clickAction }: any) => {
  return (
    <Button
      size="small"
      className="ms-global-button"
      sx={{
        backgroundColor: backgroundColor,
        "&:hover, &:active": {
          color: "#fff",
        },
      }}
      variant="contained"
      startIcon={icon}
      onClick={clickAction}
    >
      {text}
    </Button>
  );
};

export default MsButton;
