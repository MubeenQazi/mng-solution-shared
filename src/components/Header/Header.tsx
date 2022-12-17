import { Container, Box } from '@mui/material';
import './Header.scss'
import {AppImages} from "../../shared/images";

const { logo } = AppImages;

const Header = () => {
  return (
    <header className="public-header">
      <Container>
        <Box className="d-flex justify-content-between">
          <img className="logo" src={logo} alt="logo"/>
        </Box>
      </Container>
    </header>
  );
};

export default Header;