import { Container, Grid } from "@mui/material";
import {AppImages} from "../../../../shared/images";

const { cta1, cta2 } = AppImages;

const ContactSection = () => {
  return (
    <section className="cta-section">
      <Container>
        <Grid container spacing={2} className="cta">
          <Grid className="cta-content" item xs={12} md={6} paddingTop={0}>
            <p>Call us at</p>
            <a href="tel:1-888-563-9132 ">1-888-563-9132 </a>
            <p>for a free consultation today!</p>
          </Grid>
          <Grid item xs={12} md={6} paddingTop={0}>
            <div className="d-flex justify-content-between cta-img">
              <img className="cta-img-1" src={cta1} alt="cta1" />
              <img className="cta-img-2" src={cta2} alt="cta2" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactSection;