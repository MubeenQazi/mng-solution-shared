import React from 'react';
import {
  Container, Grid,
} from "@mui/material";
import {AppImages} from "../../../../shared/images";

const { about } = AppImages;

const AboutUsSection = () => {
  return (
    <section className="about">
      <Container>
        <Grid container spacing={2} marginTop={10}>
          <Grid item xs={12} md={6}>
            <img src={about} alt="about" />
          </Grid>
          <Grid className="home-about-sec" item xs={12} md={6} marginTop={5}>
            <h2 className="primary-heading">About Us</h2>
            <p>
              Managed Solution is a full-service technology management company
              and elite Microsoft managed service provider. Select our managed
              services for businesses, to save time or get expertise to manage
              complex IT configuration for businesses of any size or anywhere.
              Choose cost-effective cloud solutions to move your infrastructure
              and applications to the cloud. Our goal is to make technology
              easier and more accessible to everyone. We work with the latest
              technologies so you can focus on running your business.
            </p>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutUsSection;