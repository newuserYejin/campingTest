import React from 'react';
import '../colors.css';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import Header from './components/Header';
import Footer from './components/Footer/Footer'

const maxWidth = "";

const AppLayout = () => {
  return (
    <Box
      component="section"
      sx={{ 
        minWidth: '320px',
        minHeight:"100vh",
        fontFamily:"'Spoqa Han Sans Neo', sans-serif"
      }}
    >
      <Header />
      <Box component="section"
        sx={{
          paddingTop: {
            xs:'70px',
            md:'135px'
          },
          // 작업 후 삭제 예정
          border: {
            xs: "1px solid green",
            md: "1px solid blue",
            lg: "1px solid red"
          }
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}


export default AppLayout