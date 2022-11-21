import { Button, Typography, Box } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

export const Mint = () => {
    return (<Container sx={{
        height: "85vh", backgroundImage: "url(https://doge-nft-w84m.vercel.app/static/media/Hero.d844e258e9130af9c71d.png)", backgroundAttachment: "fixed", backgroundPosition: "50%", backgroundSize: "cover", backgroundRepeat: "no-repeat",
        display: "flex", justifyContent: "center", ml: "0%", mr: "0%", alignItems: "flex-end", pl: "0%", pr: "0%"
    }} disableGutters maxWidth="100%">
        <Box style={{
            margin: "0%", height: "40%", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"
        }} className='hero'>

            <Typography variant='h1' sx={{ color: "white", fontSize: "70px", lineHeight: "80px", fontFamily: "SaloonExt Th", fontWeight: "900", letterSpacing: "0.00938em", pt: "2%", pb: "15px" }}>
                MINT NOW
            </Typography>
            <Button fullWidth='true' variant='contained' sx={{
                textAlign: "center", fontFamily: "SALOON", fontSize: "18px",
                lineHeight: "46px",
                fontWeight: '500',
                fontStyle: 'italic',
                textTransform: 'uppercase',
                whiteSpace: "nowrap",
                background: "white",
                color: "black",
                width: "300px",
                fontFamily: "SaloonExt Th"
            }} size='large'>
                Connect Wallet
            </Button>

        </Box>
    </Container >

    )
}
