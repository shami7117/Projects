import React, { useState } from 'react';
import style from "./navbar.module.css"

function Navbar() {
    const [all, setAll] = useState(false);
    const [TV, setTV] = useState(false);
    const [laptop, setlaptop] = useState(false);
    const [phone, setPhone] = useState(false);
    const [camera, setcamera] = useState(false);
    const [audio, setaudio] = useState(false);
    const [Computers, setcomputer] = useState(false);
    const [pad, setpad] = useState(false);
    const [game, setgame] = useState(false);
    const [home, sethome] = useState(false);
    const [headpgone, setheadphone] = useState(false);
    const handleChange = () => {
        return (
            setAll(true),
            setTV(false),
            setlaptop(false),
            setPhone(false),
            setcamera(false),
            setaudio(false),
            setcomputer(false),
            setpad(false),
            setgame(false),
            sethome(false),
            setheadphone(false)

        )
    }

    return (
        <>
            <div className={style.navbar}>
                <div className={style.links}>

                    <button className={all ? `${style.link} ${style.underline}` : style.link} onClick={handleChange}>
                        All Electronics

                    </button>

                    <button className={TV ? `${style.link} ${style.underline}` : style.link} onClick={() => { setTV(true); setAll(false); setlaptop(false); setPhone(false); setcamera(false); setaudio(false); setcomputer(false); setpad(false); setgame(false); sethome(false); setheadphone(false) }}>

                    </button>

                    <button className={laptop ? `${style.link} ${style.underline}` : style.link} onClick={() => { setTV(false); setAll(false); setlaptop(true); setPhone(false); setcamera(false); setaudio(false); setcomputer(false); setpad(false); setgame(false); sethome(false); setheadphone(false) }}>
                        Laptops

                    </button>

                    <button className={phone ? `${style.link} ${style.underline}` : style.link} onClick={() => { setTV(false); setAll(false); setlaptop(false); setPhone(true); setcamera(false); setaudio(false); setcomputer(false); setpad(false); setgame(false); sethome(false); setheadphone(false) }}>
                        Cell Phones

                    </button>

                    <button className={camera ? `${style.link} ${style.underline}` : style.link} onClick={() => { setTV(false); setAll(false); setlaptop(false); setPhone(false); setcamera(true); setaudio(false); setcomputer(false); setpad(false); setgame(false); sethome(false); setheadphone(false) }}>
                        Camera & Photo


                    </button>

                    <button className={audio ? `${style.link} ${style.underline}` : style.link} onClick={() => { setTV(false); setAll(false); setlaptop(false); setPhone(false); setcamera(false); setaudio(true); setcomputer(false); setpad(false); setgame(false); sethome(false); setheadphone(false) }}>
                        Portable Audio


                    </button>

                    <button className={Computers ? `${style.link} ${style.underline}` : style.link} onClick={() => { setTV(false); setAll(false); setlaptop(false); setPhone(false); setcamera(false); setaudio(false); setcomputer(true); setpad(false); setgame(false); sethome(false); setheadphone(false) }}>
                        Computers

                    </button>

                    <button className={pad ? `${style.link} ${style.underline}` : style.link} onClick={() => { setTV(false); setAll(false); setlaptop(false); setPhone(false); setcamera(false); setaudio(false); setcomputer(false); setpad(true); setgame(false); sethome(false); setheadphone(false) }}>
                        iPad & Tablets

                    </button>

                    <button className={game ? `${style.link} ${style.underline}` : style.link} onClick={() => { setTV(false); setAll(false); setlaptop(false); setPhone(false); setcamera(false); setaudio(false); setcomputer(false); setpad(false); setgame(true); sethome(false); setheadphone(false) }}>
                        Pc Gaming

                    </button>

                    <button className={home ? `${style.link} ${style.underline}` : style.link} onClick={() => {
                        setTV(false); setAll(false); setlaptop(false); setPhone(false); setcamera(false); setaudio(false); setcomputer(false); setpad(false); setgame(false); sethome(true); setheadphone(false)
                    }} >
                        Smart Home

                    </button>

                    <button className={headpgone ? `${style.link} ${style.underline}` : style.link} onClick={() => {
                        setTV(false); setAll(false); setlaptop(false); setPhone(false); setcamera(false); setaudio(false); setcomputer(false); setpad(false); setgame(false); sethome(false); setheadphone(true)
                    }}>
                        Headphones

                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar;