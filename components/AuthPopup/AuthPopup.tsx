/** @format */

import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";
import { Link } from "react-router-dom";
import MSButton from "../GlobalButton/DownloadButton";
import "./AuthPopup.scss";

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paperWidthSm": {
    minWidth: "300px",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CancelIcon className="close-btn" />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export function CustomizedDialogs({ popup }: { popup: string }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="question-btn" onClick={handleClickOpen}>
        {/* <img src={require("../../../../AppImages/question.png")} /> */} ?
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        />
        <DialogContent className="popup-content d-flex justify-content-center align-items-center">
          <img src={popup} alt="popup" />
          <div className="popup-details">
            <p>
              If you're having trouble logging in, we can help. Please contact
              our support department:
            </p>
            <hr />
            <h4 className="label-contact-support">Contact Support:</h4>
            <h5 className="contact-email">
              E-mail –{" "}
              <a href="mail:o365@managedsolution.com">
                o365@managedsolution.com
              </a>
            </h5>
            <h5 className="contact-phone">
              Phone – <a href="tel:88856391322">(888) 563-9132 #2</a>/
              <a href="tel:88856391322">(888) 563-9132 #2</a>
            </h5>
          </div>
        </DialogContent>
        <DialogActions></DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export function LogoutPopup() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
      />
      <DialogContent className="popup-content d-flex justify-content-center align-items-center">
        <CheckCircleOutlineIcon className="success icon" />
        <Typography variant="h4" className="popup-heading">
          Successfully Signed-Out
        </Typography>
        <Link to={"/"}>
          <MSButton text="Ok" />
        </Link>
      </DialogContent>
      <DialogActions></DialogActions>
    </BootstrapDialog>
  );
}

export function ErrorPopup({ errorMessage }: { errorMessage: string | null }) {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
      />
      <DialogContent className="popup-content">
        <div className="d-flex align-items-center">
          <LockIcon className="danger" fontSize="large" />
          <h4 className="error-popup-heading danger">Sign In {errorMessage}</h4>
        </div>

        <div className="error-popup-details">
          <p>
            Your sign in attempt was not successful, but we are ready to help!
            Please email{" "}
            <a href="mail:o365@managedsolution.com">
              <b>o365@managedsolution.com</b>
            </a>
            , and one of our team members will reach out to help you get
            connected. <br />
            Thank you for choosing Managed Solution.
          </p>
        </div>
        {/* <Link to={"/"}>
          <MSButton text="Ok" />
        </Link> */}
      </DialogContent>
      <DialogActions></DialogActions>
    </BootstrapDialog>
  );
}
