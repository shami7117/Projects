import { Typography } from '@mui/material'
import { Container, Box } from '@mui/system'
import React from 'react'

const Story = () => {
    return (
        <Container sx={{ bgcolor: "black" }} maxWidth="100%" >
            <Box>
                <Typography variant='h1' sx={{ color: "white", fontSize: "70px", lineHeight: "80px", fontFamily: "SaloonExt Th", fontWeight: "900", letterSpacing: "0.00938em", pt: "2%", pb: "15px" }}>
                    THE STORY
                </Typography>
                <Typography variant='h3' sx={{
                    margin: "16px 0px 0px",
                    letterSpacing: '0.00938em',
                    color: "white",
                    fontFamily: "Montserrat",
                    fontSize: "36px",
                    lineHeight: "46px",
                    fontWeight: "700"
                }}>
                    Lineage
                </Typography>
                <Typography variant='p'
                    sx={{
                        margin: '8px 0px 0px',
                        letterSpacing: '0.00938em',
                        color: 'white',
                        fontFamily: 'Montserrat',
                        fontSize: ' 16px',
                        lineHeight: '26px',
                        fontWeight: '400'
                    }}>
                    The doge club comes from three important lineages in the Web3 and NFT universe: Doge and Bored Ape Yacht Club, Bored Ape Kennel Club.
                </Typography>
            </Box>
        </Container >
    )
}

export default Story