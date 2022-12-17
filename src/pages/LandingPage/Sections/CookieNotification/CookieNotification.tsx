import {
  Container,
  Button,
  Box,
  ListItem
} from "@mui/material";
import { Link } from "react-router-dom";

const handleClick = () => {
  localStorage.setItem("cookies", JSON.stringify(true));
  const element = document.getElementById(
    "cookieNotificationBar"
  ) as HTMLInputElement | null;

  if (element != null) {
    element.style.display = "none";
  }
};

const CookieNotification = () => {
  return (
    <section
      id="cookieNotificationBar"
      className="policy-section"
      /* Todo: should not be inline */
      style={{
        display: localStorage.getItem("cookies") ? "none" : "block",
      }}
    >
      <Container className="policy-section-container">
        <Box>
          <p>
            This website stores cookies on your computer. These cookies are used
            to collect information about how you interact with our website and
            allow us to remember you. We use this information in order to
            improve and customize your browsing experience and for analytics and
            metrics about our visitors both on this website and other media. To
            find out more about the cookies we use, see our{" "}
            <Button variant="text"><ListItem component={Link} to={ '/privacy-policy' }>Privacy Policy</ListItem></Button>
            .
          </p>
          <Box className="d-flex justify-content-end policy-btn">
            <Button
              className="btn-rounded btn-mid"
              variant="contained"
              onClick={handleClick}
            >
              Accept
            </Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default CookieNotification;