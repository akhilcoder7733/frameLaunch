import React, { useEffect, useRef } from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import Logo from '../assets/logo.jpg'
import Typed from 'typed.js';


const MainBox = styled(Box)(({ theme }) => ({
  minHeight: theme.spacing("80vh"),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(1),
  // backgroundColor: "green",
  backgroundImage:"linear-gradient(352deg, rgba(94,224,245,1) 0%, rgba(225,231,86,1) 100%)",
  flexDirection: "column",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    minHeight: theme.spacing("75vh"),
  },
}));

const LogoBox = styled(Box)(({ theme }) => ({
  minHeight: theme.spacing("15vh"),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(1),
  // backgroundColor: "red",
  gap: theme.spacing(2),
  // boxShadow:"0px 36px 74px -8px rgba(0,0,0,0.55)",
  borderRadius:"20px",
  [theme.breakpoints.down("sm")]: {
    // minHeight: theme.spacing("75vh"),
    flexDirection:"column"
  },
}));

const StyledTypo = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontFamily: "Fredoka, sans-serif",
  textAlign: "center",
}));

const StyledLogo = styled("img")(({ theme }) => ({
  width:theme.spacing("60px"),
  cursor:"pointer",
  borderRadius:"50%",
  padding:"2px",
  // boxShadow:"0px 13px 48px 5px rgba(0,0,0,0.75)",
  backgroundColor:"#fff"

}));

function Welcome() {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Budget Photography', 'Kids Photography', 'Wedding Photography'],
      typeSpeed: 50,
      loop: true,
      backSpeed: 20,
      backDelay: 1000,
    };

    const typed = new Typed(typedTextRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <MainBox>
      <LogoBox data-aos="fade-up" data-aos-delay="100">
        <StyledLogo src={Logo} alt="logo-pic" />
        <StyledTypo variant="h3">FrameLaunch</StyledTypo>
      </LogoBox>
      <StyledTypo variant="h4"  data-aos="fade-up" data-aos-delay="200">
        “Great photography is about depth of feeling, not depth of field.”
      </StyledTypo>
      <StyledTypo variant="h4"  data-aos="fade-up" data-aos-delay="300">
        “I don’t trust words. I trust pictures.”
      </StyledTypo>
      <StyledTypo variant="h5"><span ref={typedTextRef} /></StyledTypo>
    </MainBox>
  );
}

export default Welcome;
