import React from 'react';
import { Toolbar, AppBar, IconButton, Container, Link, Stack, Button, Drawer, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import Hamburger from 'hamburger-react'
import { useState } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';






const theme = createTheme({

    palette: {
        primary: {
            light: '#8f9a27',
            main: '#cddc39',
            dark: '#d7e360',
            contrastText: '#fff',
        },
        secondary: {
            light: '##000000',
            main: '#000',
            dark: '#333333',
            contrastText: '#000',
        }
    }
});




export const Navbar = (props) => {
    const [navbar, setnavbar] = useState(false);

    const styles = {
        drawerPaper: {
            width: '100%',
        },
    };

    return (<>
        <AppBar sx={{ borderTop: "4px solid rgb(184, 187, 42)", height: "15vh", }} position='static' color='secondary' theme={theme}>
            <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", width: "100%" }}>
                <Box sx={{ width: "172px", height: "66px", }}>
                    <img src="/Assets/logo.png" alt="logo" className='logo'  ></img>
                </Box>
                <Box sx={{
                    display: {
                        md: "flex",
                        xs: "none"
                    }, justifyContent: 'space-between', alignItems: 'center'
                }}>
                    <Link spy={true} sx={{ marginRight: "30px", fontFamily: "SaloonExt Th" }} smooth={true} href='#' color="white" variant='h6' underline='none'>
                        MINT
                    </Link>
                    <Link href='#' sx={{ marginRight: "30px", fontFamily: "SaloonExt Th" }} variant='h6' underline='none' color="white" >
                        STORY
                    </Link>
                    <Link href='#' sx={{ marginRight: "30px", fontFamily: "SaloonExt Th" }} variant='h6' underline='none' color="white">
                        UTILITY
                    </Link>
                    <Link href='#' sx={{ marginRight: "30px", fontFamily: "SaloonExt Th" }} variant='h6' underline='none' color="white">
                        FAQ
                    </Link>
                    <Link href='#' sx={{ marginRight: "30px", fontFamily: "SaloonExt Th" }} variant='h6' underline='none' color="white">
                        TEAM
                    </Link>
                </Box>
                <Box sx={{
                    display: {
                        md: "flex",
                        xs: "none"
                    }, justifyContent: 'space-between', alignItems: 'center'
                }}
                >
                    <Stack direction={"row"} sx={{ pr: "16px" }} spacing="4">
                        <img src='/Assets/discord.png' style={{ width: "26px", height: "26px" }}></img>
                    </Stack>
                    <Stack direction={"row"} sx={{ pr: "16px" }} spacing="2">
                        <img src='/Assets/twitter.png' style={{ width: "26px", height: "26px" }}></img>
                    </Stack>
                    <Stack direction={"row"} sx={{ pr: "16px" }} spacing="2">
                        <img src='/Assets/opensea.png' style={{ width: "26px", height: "26px" }}></img>
                    </Stack>
                    <Stack direction={"row"} sx={{ pr: "16px" }} spacing="2">
                        <img src='/Assets/telegram.png' style={{ width: "26px", height: "26px" }}></img>
                    </Stack>
                    <Stack className='wallet' sx={{ pr: "16px", }} direction={"row"} spacing="2">
                        <Button variant='contained' size='small' color='primary' theme={theme}> <Typography variant='h6' color={"black"}
                            sx={{ fontFamily: "SaloonExt Th" }}>CONNECT WALLET</Typography></Button>

                    </Stack>
                </Box>
                <Box sx={{ display: "none" }}>
                    <Hamburger onToggle={() => { setnavbar(true) }} color='white' toggled={navbar} />
                </Box>


                <Drawer transitionDuration={500} variant='temporary' open={navbar} anchor='left' onClose={() => setnavbar(false)}
                    PaperProps={{
                        sx: { width: "100%", backgroundColor: "rgb(184, 187, 42)", overflowY: "hidden", pr: "16px", pl: "16px" }
                    }}>
                    <Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", }} >
                            <Box sx={{ width: "172px", height: "66px" }}>
                                <img src="/Assets/logo.png" alt="logo" className='logo'  ></img>
                            </Box>
                            <Box  >
                                <Hamburger toggled={navbar} duration={0.8} easing="ease-in" rounded={true} onToggle={() => { setnavbar(false) }} color='white' />
                                {/* <CloseOutlinedIcon color="white" onClick={() => { setnavbar(false) }} /> */}

                            </Box>
                        </Box>

                        <Box sx={{
                            width: '100%', height: '100vh',
                            display: "flex", justifyContent: 'start', alignItems: 'center', flexDirection: 'column',
                            pt: "50px"
                        }}>
                            <Link spy={true} smooth={true} href='#' color="white" variant='h6' underline='none'>
                                <Typography variant='h6' color={"black"}>MINT</Typography>
                            </Link>
                            <Link href='#' variant='h6' underline='none' color="white" >
                                <Typography variant='h6' color={"black"}>STORY</Typography>
                            </Link>
                            <Link href='#' variant='h6' underline='none' color="white">
                                <Typography variant='h6' color={"black"}>UTILITY</Typography>
                            </Link>
                            <Link href='#' variant='h6' underline='none' color="white">
                                <Typography variant='h6' color={"black"}>FAQ</Typography>
                            </Link>
                            <Link href='#' variant='h6' underline='none' color="white">
                                <Typography variant='h6' color={"black"}>TEAM</Typography>
                            </Link>
                            <Box sx={{
                                display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", pt: "40px", pb: "20px"
                            }}>
                                <Stack direction={"row"} spacing="2">
                                    <img src='/Assets/discord.png' style={{ width: "26px", height: "26px" }}></img>
                                </Stack>
                                <Stack direction={"row"} spacing="2">
                                    <img src='/Assets/twitter.png' style={{ width: "26px", height: "26px" }}></img>
                                </Stack>
                                <Stack direction={"row"} spacing="2">
                                    <img src='/Assets/opensea.png' style={{ width: "26px", height: "26px" }}></img>
                                </Stack>
                                <Stack direction={"row"} spacing="2">
                                    <img src='/Assets/telegram.png' style={{ width: "26px", height: "26px" }}></img>
                                </Stack>
                            </Box>
                            <Stack className='wallet' direction={"cols"} spacing="2">
                                <Button size='large' variant='contained' color='primary' theme={theme}>
                                    <Typography variant='h6' color={"black"}>CONNECT WALLET</Typography>
                                </Button>
                            </Stack>
                        </Box>

                    </Box>
                </Drawer>

            </Container>
        </AppBar >
    </>
    )
}

