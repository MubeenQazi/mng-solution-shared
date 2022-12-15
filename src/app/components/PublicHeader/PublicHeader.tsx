import React from 'react';
import './PublicHeader.scss'

import {Container, Box} from '@mui/material';

const PublicHeader = () => {



    return (
        <header className="public-header">
            <Container>
                <Box className="d-flex justify-content-between">
                   <img className="logo" src={require("../../../AppImages/logo.png")} alt="logo"/>
                </Box>
            </Container>
        </header>


    )
}

export default PublicHeader
