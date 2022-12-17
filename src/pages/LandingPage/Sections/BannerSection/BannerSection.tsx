import React from "react";
import "./BannerSection.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import {Link} from "react-router-dom";
import {Button, Box, Typography} from "@mui/material";
import {AppImages} from "../../../../shared/images";

const {
  slidebg1,
  microsoftRound,
  roundAward,
  roundAzure,
} = AppImages;
const roundedIcon = [microsoftRound, roundAward, roundAzure];

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  draggable: false,
  initialSlide: 0,
  swipeToSlide: false,
  nextArrow: <ChevronRightIcon/>,
  prevArrow: <ChevronLeftIcon/>,
};

const BannerSection = () => {
  return (
    <div>
      <Slider className="slider" {...settings}>
        {[1, 2, 3].map((s) => (
          <div key={s}>
            <div
              className="slider-slide"
              style={{backgroundImage: `url(${slidebg1})`}}
            >
              <Box className="d-flex justify-content-center align-items-center gap-10 slider-content">
                <Typography variant={"h1"}>Cloud Service Portal</Typography>
                <Typography variant={"h3"}>we make licensing simple</Typography>
              </Box>
              <Box className="d-md-flex justify-content-center gap-15 mt-40 slider-btns">
                <Button
                  className="btn-rounded btn-large slider-btn already-customer"
                  variant="contained">
                  <ListItem component={Link} to={"/login"}>
                    Already A Customer?
                  </ListItem>
                </Button>
                <Button
                  color="secondary"
                  className="btn-rounded btn-large slider-btn already-customer"
                  variant="contained"
                >
                  <ListItem component={Link} to={"/become-customer"}>
                    Become A Customer
                  </ListItem>
                </Button>
              </Box>
              <div className="slider-rounded d-flex justify-content-center gap-25 mt-40">
                {roundedIcon.map((icon, index) => (
                  <Box className="rounded-box" key={index}>
                    <img src={icon} alt="icon"/>
                  </Box>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSection;