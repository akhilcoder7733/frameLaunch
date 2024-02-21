import React from "react";
import { styled } from "@mui/system";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import Logo from "../assets/logo.jpg";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: theme.spacing("80vh"),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(1),
  // backgroundColor: "green",
  backgroundImage:
    "linear-gradient(352deg, rgba(94,224,245,1) 0%, rgba(225,231,86,1) 100%)",
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
  borderRadius: "20px",
  [theme.breakpoints.down("sm")]: {
    // minHeight: theme.spacing("75vh"),
    flexDirection: "column",
  },
}));

const AboutBox = styled(Box)(({ theme }) => ({
  minHeight: theme.spacing("15vh"),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(1),
  // backgroundColor: "red",
  gap: theme.spacing(2),
  // boxShadow:"0px 36px 74px -8px rgba(0,0,0,0.55)",
  // borderRadius:"20px",
  width: "90%",
  [theme.breakpoints.down("sm")]: {
    // minHeight: theme.spacing("75vh"),
    flexDirection: "column",
    width: "95%",
  },
}));

const StyledTypo = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontFamily: "Fredoka, sans-serif",
  textAlign: "center",
}));
const CustomTypo = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontFamily: "Fredoka, sans-serif",
}));

const StyledLogo = styled("img")(({ theme }) => ({
  width: theme.spacing("100px"),
  cursor: "pointer",
  borderRadius: "50%",
  padding: "2px",
  // boxShadow:"0px 13px 48px 5px rgba(0,0,0,0.75)",
  backgroundColor: "#fff",
}));

const HalfBox = styled(Box)(({ theme }) => ({
  width: "50%",
  // backgroundColor:"red"
  [theme.breakpoints.down("sm")]:{
    width:"100%"
  }
}));
const SaHalfBox = styled(Box)(({ theme }) => ({
  width: "50%",
  // backgroundColor:"red"
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: theme.spacing(2),
  [theme.breakpoints.down("sm")]:{
    width:"100%"
  }
}));
const ContentBox = styled(Box)(({ theme }) => ({
  width: "90%",
  // backgroundColor:"red",
  minHeight: "40vh",
  // border: "2px solid",
  borderRadius: "20px",
  padding: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  boxShadow:" 0px 0px 63px 1px rgba(0,0,0,0.59)",
  [theme.breakpoints.down("sm")]:{
    minHeight: "30vh",
  }
}));

const AddBox = styled(Box)(({ theme }) => ({
  width: "80%",
  // backgroundColor:"green",

  padding: theme.spacing(1),
  display: "flex",
  gap: theme.spacing(1),
  marginLeft: theme.spacing(1),
}));

const InstaFb = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  width:"90%",
  justifyContent:"center",
  marginLeft:theme.spacing(2)
}));
function About() {
  return (
    <MainBox>
      <LogoBox  data-aos="fade-up" data-aos-delay="100">
        <StyledLogo src={Logo} alt="logo-pic" />
        <StyledTypo variant="h2">FrameLaunch</StyledTypo>
      </LogoBox>
      <AboutBox>
        <HalfBox>
          <Typography
            variant="h4"
            style={{ fontWeight: 600, fontFamily: "Fredoka, sans-serif" }}
          >
            About Us:
          </Typography>
          <Typography
            variant="h5"
            style={{ fontWeight: 600, fontFamily: "Fredoka, sans-serif" }}
          >
            FrameLaunch: Your Budget Photography Solution
          </Typography>
          <CustomTypo variant="subtitle1">
            At <u>FrameLaunch</u>, we understand the importance of capturing
            life's special moments without breaking the bank. Our budget
            photography services cater to a wide range of needs, including kids
            photography, weddings, photoshoots, and more.
          </CustomTypo>
          <CustomTypo variant="subtitle1">
            With <u>FrameLaunch</u>, you can expect high-quality photography
            that fits your budget. Whether you're looking to capture the
            innocence of childhood, the magic of a wedding day, or the essence
            of a professional photoshoot, we have you covered.
          </CustomTypo>
          <CustomTypo variant="subtitle1">
            Our team is dedicated to providing you with a seamless experience
            from start to finish. Choose <u>FrameLaunch</u> for your next
            photography project and let us help you capture the moments that
            matter most.
          </CustomTypo>
        </HalfBox>
        <SaHalfBox>
          <ContentBox>
            <Typography
              variant="h5"
              style={{ fontWeight: 600, fontFamily: "Fredoka, sans-serif" }}
            >
              Contact us:
            </Typography>
            <AddBox  data-aos="fade-up" data-aos-delay="100">
              <PermIdentityIcon />
              Libin Joseph
            </AddBox>
            <AddBox  data-aos="fade-up" data-aos-delay="200">
              <WhatsAppIcon />
              +91 94488 74747
            </AddBox>
            <AddBox  data-aos="fade-up" data-aos-delay="300">
              <LocationOnIcon />
              Kottayam, Kerala
            </AddBox>
            <AddBox  data-aos="fade-up" data-aos-delay="400">
              <EmailIcon />
              libin@gmail.com
            </AddBox>
            <InstaFb>
              <IconButton  data-aos="fade-up" data-aos-delay="500">
                <Tooltip title="Instagram">
                <InstagramIcon />
                </Tooltip>
              </IconButton>
              <IconButton  data-aos="fade-up" data-aos-delay="600">
              <Tooltip title="FaceBook">

                <FacebookIcon />
                </Tooltip>
              </IconButton>
            </InstaFb>
          </ContentBox>
        </SaHalfBox>
      </AboutBox>
    </MainBox>
  );
}

export default About;
