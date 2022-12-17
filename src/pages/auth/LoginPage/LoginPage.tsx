import React from "react";
import { Button, Grid } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Footer from "../../../components/Footer/Footer";
import { LogoutPopup, CustomizedDialogs } from "./Popup";
import { useSearchParams } from "react-router-dom";
import {AppImages} from "../../../shared/images";
import "./LoginPage.scss";

const { microsoft, logo } = AppImages;

const LoginPage = (props: any) => {
  const [searchParams] = useSearchParams();

  const login = () => {

  };

  const userType = props.userType.toLowerCase().replace(/\b[a-z]/g, function (letter: any) {
    return letter.toUpperCase();
  });

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="vh-100 app-login-bg"
    >
      <Grid item>
        <div className="app-login">
          <img
            className="app-logo"
            alt="logo"
            src={logo}
          />
          <div className="login-inner">
            <div className="inner-content">
              <div className="content-left">
                <h3 className="sign-in">
                  <LockIcon className="lock" /> Sign In
                </h3>
                <h5>to the {userType} Portal</h5>
              </div>
              <div className="content-right">
                {
                  (searchParams.get('a') === "signout") && <LogoutPopup />
                }
                <CustomizedDialogs />
              </div>
            </div>
            <Button className="btn-submit" onClick={login}>
              <img
                className="btn-img"
                alt="microsoft img"
                src={microsoft}
              />
              <h3 className="btn-text">Continue with Microsoft</h3>
            </Button>
          </div>
        </div>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default LoginPage;