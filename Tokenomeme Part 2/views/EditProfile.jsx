import { Container, Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import Rectangle from '../public/assets/pictures/Rectangle.svg';
import Elipse from '../public/assets/pictures/profile.jpg';
import Avatar from '@mui/material/Avatar';
import { Typography, TextField, Button, Divider } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import Icon from '../public/assets/pictures/Icon.svg';
import VectorTop from "../public/assets/pictures/VectorTop.svg";
import VectorBottom from "../public/assets/pictures/VectorBottom.svg";
import Iconify from "../public/assets/pictures/Iconify.svg";
import facebook from "../public/assets/pictures/twitter.svg";
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// BiCheck

const EditProfile = () => {
  return (
    <div style={{ position: "relative", paddingLeft: '0', width: "100%" }} >
      {/* ***************** */}
      {/* TOP IMAGE */}
      {/* ***************** */}
      <Box sx={{
        width: "100%", height: "281px", position: "absolute", left: "0", top: "-100px", display: 'flex'
        , justifyContent: "center"
      }} className='main_img'>

      </Box>


      {/* ***************** */}
      {/* InFO LINE with PIcture */}
      {/* ***************** */}
      <div style={{ position: "relative", width: "100%" }}>



        <Box className='line' sx={{
          marginTop: "200px", paddingLeft: "24px", paddingRight: "24px", maxWidth: '1751px', marginLeft: { xs: '0%', sm: '0%', md: '0%', m: "0%", lg: '0%', xl: '15%' }, marginRight: { xs: '0%', sm: '0%', md: '0%', m: "0%", lg: '0%', xl: '2%' }, flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' },

        }} >
          <Box sx={{ zIndex: "10", mr: "-50px" }} className='profile'>
            <Avatar sx={{ position: "absolute", top: '50%', left: '50%', transform: "translate(-50%,-50%)", width: "234px", height: "234px" }}>
              <Image src={Elipse} alt="ahtsham">
              </Image>

            </Avatar>
            <div style={{
              backgroundColor: "white", borderRadius: "50%", padding: '16px', width: '55px', height: "55px", position: "absolute",
              zIndex: "99",
              left: '190px',
              top: '190px',

            }} className="pen_box">
              <Image src={Icon} alt="box" fill style={{ zIndex: "999", }} ></Image>
            </div>
          </Box>

          <Box sx={{
            maxWidth: { xs: '182px', sm: '182px', md: '1571px', lg: '1571px', xl: '1571px' }, height: { xs: '671px', sm: '671px', md: '182px', lg: '182px', xl: '182px' }, backgroundColor: '#FFFFFF', display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", boxShadow: '0px 15px 13px rgba(0, 0, 0, 0.1)',
            borderRadius: '16px', zIndex: "9", position: "relative", flexGrow: "1", flexDirection: { xs: 'column', sm: 'column', md: 'row', m: 'row', lg: 'row', xl: 'row', }, textAlign: 'left', mt: { xs: '-100px', sm: '-100px', md: '0px', m: '0px', lg: '0px', xl: '0px', },
            mr: { xs: '-25px', sm: '-25px', md: '0px', m: '0px', lg: '0px', xl: '0px', }


          }}>
            <Box sx={{
              ml: { xs: '0', sm: '0', md: '100px', m: '100px', lg: '100px', xl: '100px', }, display: "flex", justifyContent: { xs: 'center', sm: 'center', md: 'center', m: 'center', lg: 'center', xl: 'center', }, alignItems: { xs: 'center', sm: 'center', md: 'flex-start', m: 'flex-start', lg: 'flex-start', xl: 'flex-start', }, flexDirection: "column", textAlign: 'center',
              mt: { xs: '100px', sm: '100px', md: '0px', m: '0px', lg: '0px', xl: '0px', }
            }}>
              <Typography variant='h3' sx={{
                fontFamily: 'Montserrat',
                fontSize: '32px',
                fontWeight: '700',
                lineHeight: '50px',
                letterSpacing: ' 0em',
                textAlign: { xs: 'center', sm: 'center', md: 'left', m: 'left', lg: 'left', xl: 'left', },
                color: "#000000"
              }} >
                Alex Jacquot
                <span className='icon'>
                  <DoneIcon sx={{ color: "white", width: '40px', height: "40px", textAlign: "center", pt: "15px", fontWeight: "700" }} />
                </span>
              </Typography>


              <Typography variant='p' sx={{ color: "orange" }}>
                @alex_jacquot777
              </Typography>


              <Typography variant='p' sx={{
                fontFamily: 'Lato',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '28px',
                letterSpacing: '0em',
                textAlign: 'left',
                color: "#0F0F0E99"
              }}>
                Bangkok
              </Typography>
            </Box>
            <Box>
              <Box sx={{ textAlign: "center", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: { xs: 'column', sm: 'column', md: 'row', m: 'row', lg: 'row', xl: 'row', } }}>
                <div style={{ textAlign: "center", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "column", marginRight: "16px" }}>
                  <Typography className='followers' variant='h3' >
                    100
                  </Typography>
                  <Typography variant='p' sx={{
                    fontFamily: 'Lato',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '154%',
                  }}>
                    Following
                  </Typography>
                </div>
                <div style={{ textAlign: "center", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "column", marginRight: "16px" }}>
                  <Typography className='followers' variant='h3' >
                    200K
                  </Typography>
                  <Typography variant='p' sx={{
                    fontFamily: 'Lato',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '154%',
                  }}>
                    Following
                  </Typography>
                </div>
                <div style={{ textAlign: "center", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "column", marginRight: "16px" }}>
                  <Typography className='followers' variant='h3' >
                    400K
                  </Typography>
                  <Typography variant='p' sx={{
                    fontFamily: 'Lato',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '154%',
                  }}>
                    Following
                  </Typography>
                </div>
              </Box>
            </Box>
          </Box>
        </Box>


        {/* ********************** */}
        {/* ********************** */}
        {/* FORM BOX */}
        {/* ********************** */}
        {/* ********************** */}



        <Box className='input_box' sx={{
          position: 'absolute', top: { xs: '1200px', sm: "1200px", md: "697px", lg: '697px', xl: '697px' }, width: { xs: '400px', sm: "571px", md: "871px", lg: '871px', xl: '871px' }, marginLeft: { xs: '0px', sm: '0px', md: '0px', lg: '0px', xl: '0px' }, height: { xs: '700px', sm: '549px', md: '549px', lg: '549px', xl: '549px' },
          marginRight: { xs: '50px', sm: '0px', md: '0px', lg: '0px', xl: '0px' },
          border: { xs: '0px', sm: '1px', md: '1px', lg: '1px', xl: '1px' }, p: '1px'
        }}>
          <Box sx={{ background: "white", padding: "24px", height: '100%', borderRadius: "6px" }}>
            <Typography variant='h2' sx={{
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '30px',
              lineHeight: '37px',
              textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left', xl: 'left' }
            }}>
              Personal Information
            </Typography>



            <Box className='textField' sx={{
              mt: '50px', display: "flex", flexDirection: {
                xs: 'column', sm: "row", md: "row", lg: 'row', xl: 'row',
              },
              justifyContent: {
                xs: 'flex-end', sm: "flex-end", md: "space-between", lg: 'space - between', xl: 'space-between',
              }, width: { xs: "473", sm: "473", md: "803px", lg: "803px", xl: "803px" },
              ml: { xs: "-20px", sm: "0px", md: "0px", lg: "0px", xl: "0px" }
            }}>
              <input type={'text'} className="inpput" placeholder="Username" style={{
                width: '389px',
                height: '43.88px',
                padding: '10.9391px 15.801px',
                // gap: '2.43px',
                border: '1.21546px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0px 1.21546px 2.43092px rgba(0, 0, 0, 0.05)',
                borderRadius: '7.29275px',
                boxSizing: "border-box",



              }} />
              <input className="inpput" type={'text'} placeholder="Email Address" style={{
                width: '388.95px',
                height: '43.88px',
                padding: '10.9391px 15.801px',
                // gap: '2.43px',
                border: '1.21546px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0px 1.21546px 2.43092px rgba(0, 0, 0, 0.05)',
                borderRadius: '7.29275px',
                boxSizing: "border-box",


              }} />

            </Box>
            <Box sx={{
              display: "flex", justifyContent: {
                xs: 'center', sm: "center", md: "space-between", lg: 'space - between', xl: 'space-between',
              }, flexDirection: { xs: 'column', sm: "row", md: "row", lg: 'row', xl: 'row' }, alignItems: "center", mt: "24px",
              width: { xs: "473", sm: "473", md: "803px", lg: "803px", xl: "803px" },
            }}>
              <input className="inpput" type={'password'} placeholder="Password" style={{
                width: '388.95px',
                height: '43.88px',
                padding: '10.9391px 15.801px',
                gap: '2.43px',
                border: '1.21546px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0px 1.21546px 2.43092px rgba(0, 0, 0, 0.05)',
                borderRadius: '7.29275px',
                boxSizing: "border-box",
                placeContent: "Language",


              }} />
              <select className="inpput" name="Language" style={{
                width: '388.95px',
                height: '43.88px',
                padding: '10.9391px 15.801px',
                gap: '2.43px',
                border: '1.21546px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0px 1.21546px 2.43092px rgba(0, 0, 0, 0.05)',
                borderRadius: '7.29275px',
                boxSizing: "border-box",
                fontFamily: 'Lato',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '12px',
                lineHeight: '154%',
                color: 'rgba(0, 0, 0, 0.5)',


              }} >
                <option value={'language'}>Language</option>
              </select>

            </Box>
            <Box sx={{ marginTop: "24px" }} >


              <textarea placeholder='Short Description' className='text_area' style={{ width: { sx: '471px', sm: '471px', md: "803px", lg: "803px", xl: "803px" } }} >

              </textarea>


              <Box className='btn_group' sx={{
                display: 'flex', justifyContent: "space-between", alignItems: "center",
                left: { xs: '50px', sm: '260px', md: '590px', lg: '590px', xl: "590px" },
                top: { xs: '650px', sm: '458.76px', md: '458.76px', lg: '458.76px', xl: "458.76px" },
                background: 'white'
              }}>
                <Button sx={{
                  padding: '14.246px 28.4919px',
                  gap: '11.4px',

                  width: '106.98px',
                  height: '49px',
                  background: 'linear-gradient(116.12deg, #F46531 8.93%, #F46E31 18.56%, #F48631 34.22%, #F4AD31 53.86%, #F4B331 56.44%, #F4B331 103.58%, #F4E795 137.56%), #D9D9D9',
                  borderRadius: '11.3968px',
                }} variant='contained'>
                  Save
                </Button>

                <Button sx={{
                  padding: '14.246px 28.4919px',
                  gap: '11.4px',
                  borderColor: "#0000001A",
                  width: '125.98px',
                  height: '49px',
                  background: '#FFFFFF',
                  borderRadius: '11.3968px',
                }} variant='outlined'>
                  Cancel
                </Button>
              </Box>


            </Box>
          </Box>
        </Box>

        {/* ********************** */}
        {/* ********************** */}
        {/* INFO BOX */}
        {/* ********************** */}
        {/* ********************** */}



        <Box className='info_box' sx={{ maxWidth: { xs: '300px', sm: "571px", md: "871px", lg: '871px', xl: '871px' }, marginLeft: { xs: '0px', sm: '0px', md: '0px', lg: '0px', xl: '0px' }, height: { xs: '700px', sm: '515px', md: '515px', lg: '515px', xl: '515px' }, border: { xs: '0px', sm: '1px', md: '1px', lg: '1px', xl: '1px' }, padding: "1px" }} theme={theme}>
          <div style={{ background: "white", padding: "1px", height: '100%', borderRadius: "6px", padding: "24px", borderRadius: "6px" }} >
            <Box sx={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", xl: "row" }, maxWidth: '797px',
              height: '92px', marginBottom: { xs: '80px', sm: '16px', md: '16px', lg: '16px', xl: '16px' },

            }} theme={theme}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItem: 'center', flexDirection: 'column' }}>
                <Typography variant='h4' sx={{
                  fontFamily: 'Montserrat',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '25px',
                  lineHeight: '156.5%',
                  color: 'black'
                }}>
                  Connect With Reddit
                </Typography>
                <Typography variant='p' sx={{
                  fontFamily: 'Lato',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '18px',
                  lineHeight: '156.5%',
                  color: 'rgba(15, 15, 14, 0.6)'
                }}>
                  Connect to Youmeme using your Reddit account
                </Typography>
              </div>

              <Button className='button' variant='contained' sx={{
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '18px',
                lineHeight: '154%',
                width: '236px',
                height: '49px',
                display: 'flex',
                justifyContent: "space-between",
                alignItems: 'center',
                marginLeft: { xs: "-20px", sm: '0', md: '0', lg: '0', xl: '0' }
              }} >
                <Image src={Iconify} alt="reddit"></Image>
                <Typography variant='h6' sx={{
                  fontFamily: 'Montserrat',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: '18px',
                  lineHeight: '154%',
                  textTransform: 'capitalize',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                  Connect reddit
                </Typography>
              </Button>


            </Box>
            <Divider sx={{ mb: "26px" }} />


            <Box sx={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", xl: "row" }, maxWidth: '797px',
              height: '92px', marginBottom: "16px", marginBottom: { xs: '80px', sm: '16px', md: '16px', lg: '16px', xl: '16px' },


            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItem: 'center', flexDirection: 'column' }}>
                <Typography variant='h4' sx={{
                  fontFamily: 'Montserrat',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '25px',
                  lineHeight: '156.5%',
                  color: 'black'
                }}>
                  Connect With Facebook
                </Typography>
                <Typography variant='p' sx={{
                  fontFamily: 'Lato',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '18px',
                  lineHeight: '156.5%',
                  color: 'rgba(15, 15, 14, 0.6)'
                }}>
                  Connect to Youmeme using your Facebook account
                </Typography>
              </div>

              <Button className='button facebook' variant='contained' sx={{
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '18px',
                lineHeight: '154%',
                width: '236px',
                height: '49px',
                display: 'flex',
                justifyContent: "center",
                alignItems: 'center',
                paddingLeft: "0",
                marginLeft: { xs: "-20px", sm: '0', md: '0', lg: '0', xl: '0' }

              }} endIcon>
                <Image src={facebook} alt="reddit"></Image>
                <Typography variant='h6' sx={{
                  fontFamily: 'Montserrat',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: '18px',
                  lineHeight: '154%',
                  textTransform: 'capitalize',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',

                }}>
                  Connect Facebook
                </Typography>
              </Button>


            </Box>
            <Divider sx={{ mb: "26px" }} />


            <Box sx={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", xl: "row" }, maxWidth: '797px',
              height: '92px', marginBottom: "16px", marginBottom: { xs: '80px', sm: '16px', md: '16px', lg: '16px', xl: '16px' }
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItem: 'center', flexDirection: 'column' }}>
                <Typography variant='h4' sx={{
                  fontFamily: 'Montserrat',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '25px',
                  lineHeight: '156.5%',
                  color: 'black'
                }}>
                  Connect With Twitter
                </Typography>
                <Typography variant='p' sx={{
                  fontFamily: 'Lato',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '18px',
                  lineHeight: '156.5%',
                  color: 'rgba(15, 15, 14, 0.6)'
                }}>
                  Connect to Youmeme using your Twitter account
                </Typography>
              </div>

              <Button className='button' variant='contained' sx={{
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '18px',
                lineHeight: '154%',
                width: '236px',
                height: '49px',
                display: 'flex',
                justifyContent: "space-between",
                alignItems: 'center',
                marginLeft: { xs: "-20px", sm: '0', md: '0', lg: '0', xl: '0' }

              }} >
                <TwitterIcon />
                <Typography variant='h5' sx={{
                  fontFamily: 'Montserrat',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: '18px',
                  lineHeight: '154%',
                  textTransform: 'capitalize',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                  Connect Twitter
                </Typography>
              </Button>


            </Box>
            <Divider sx={{ mb: "16px" }} />
            <Button variant='contained' className='update' sx={{ right: { xs: '70px', sm: "250px", md: "350px", lg: '350px', xl: '350px' }, bottom: { xs: '10px', sm: "20px", md: "40px", lg: '39px', xl: '39px' } }}>Update</Button>
          </div>
        </Box >




        {/* ***************** */}
        {/* BACKGROUND IMAGES */}
        {/* ***************** */}
        <Box sx={{
          position: 'absolute',
          maxWidth: '1022px',
          maxHeight: '1009px',
          left: '-61px',
          top: '-352.82px',
          overflow: "hidden",
          zIndex: "-10"

        }}>
          <Image src={VectorTop} fill alt="top-shape"></Image>
        </Box>

        <Box sx={{
          position: 'absolute',
          maxWidth: '1022px',
          maxHeight: '1009px',
          right: '0px',
          top: '1091.82px',
          top: { xs: "1900px", sm: '1500px', md: "1091.82px", lg: '1091.82px', xl: "1091.82px" },
          // right: '0%',
          // top: '100%',
          // transform: "translate(30%,30%)",
          overflow: "hidden"
        }}>
          <Image src={VectorBottom} fill alt="bottom-shape"></Image>
        </Box>






      </div >
    </div >
  )
}


export default EditProfile;