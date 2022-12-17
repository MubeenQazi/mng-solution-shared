import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import "../../shared/styles/policies.scss";
import {AppImages} from "../../shared/images";

const { logo } = AppImages;

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Grid className="archive">
      <Grid item className="archive-top-sec">
        <img
          className="app-logo"
          src={logo}
          alt="logo"
        />
      </Grid>
      <Grid item className="archive-head">
        <Button className="back-btn" onClick={handleBack}>
          <ArrowBackIosIcon className="back-arrow" fontSize="small" /> Back
        </Button>
        <Typography className="page-title">Privacy Policy</Typography>
        <Button className="download-btn">Download</Button>
      </Grid>
      <Grid item className="archive-content">
        <Typography className="archive-paras">
          <h3>Effective Date: 5/4/2017 Last Updated: August 2018</h3>
          <p>
            Managed Solution LLC, including its wholly or partly owned (directly
            and indirectly) subsidiaries (hereinafter “Managed Solution”) is
            committed to protecting the privacy and security of the personal
            information of our customers, employees and third parties. Managed
            Solution is committed to maintaining and safeguarding the privacy of
            the information you share with us through our website
            (managedsolution.com) as well as our service provider business. This
            privacy notice discloses the privacy practices for
            (managedsolution.com and the company, Managed Solution).
          </p>
          <p className="para-br">
            This Privacy Notice highlights how Managed Solution uses the
            information collected through its websites, apps, services and
            technology solutions.
          </p>
          <h5>
            Information We Collect<span>1.1 Summary</span>
          </h5>
          <p>
            Managed Solution collects many kinds of information in order to
            operate effectively and provide you the best products, services and
            experiences we can. We collect information when you register, sign
            in and use our sites and services or call in / meet for our support
            or projects. We also may get information from other companies or
            your employer if we are engaged in business. We collect this
            information in a variety of ways,including from issue logs, service
            reports, web forms, technologies like cookies, web logging and
            software on your computer or other device.
          </p>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PrivacyPolicyPage;