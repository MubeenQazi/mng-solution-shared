/** @format */

import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertMessage(
  open: boolean = false,
  message: string,
  alertcolor: any
) {
  const [alert, setAlert] = React.useState(open);
  React.useEffect(() => {
    // when the component is mounted, the alert is displayed for 5 seconds
    setTimeout(() => {
      setAlert(false);
    }, 5000);
  }, [open]);

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={alert} autoHideDuration={6000}>
        <Alert severity={alertcolor} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
