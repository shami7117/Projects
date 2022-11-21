import React from 'react';
import Style from "../Product/Buy.module.css";


function BuyItWith() {


    return (
        <>
            <div className={Style.buy}>
                <div className={Style.buyHeading}> <p >Cómpralo con</p></div>
                <div className={Style.BuyInfo}>

                    <div className={Style.Cards}>
                        <div className={Style.CardItem}>
                            {/* SingleCard */}
                            <div className={Style.singleCard}>
                                <div className={Style.cardImage}>
                                    <img src='/Images/tyre.svg' style={{ width: "100%", height: "100%", objectFit: "contain" }} alt='tyre'></img>
                                </div>
                                <div className={Style.circle}>
                                    <img src='/Images/circle.svg' alt='check' />
                                </div>
                                <h1 className={Style.MainHeading} >
                                    Hankook
                                    DynaPro Off-Road
                                </h1>
                                <h5>This product:</h5>
                                <p>Technics EAH-AZ60E-K,
                                    Aurkcularies Amet minim mollit
                                    non deserunt...
                                </p>
                                <h3>€ 23,06</h3>
                            </div>
                            {/* SingleCard */}
                            <div className={Style.singleCard}>
                                <div className={Style.cardImage}>
                                    <img src='/Images/tyre.svg' style={{ width: "100%", height: "100%", objectFit: "contain" }} alt='tyre'></img>
                                </div>
                                <div className={Style.circle}>
                                    <img src='/Images/circle.svg' alt='check' />
                                </div>
                                <h1 className={Style.MainHeading} >
                                    Hankook
                                    DynaPro Off-Road
                                </h1>
                                <h5>This product:</h5>
                                <p>Technics EAH-AZ60E-K,
                                    Aurkcularies Amet minim mollit
                                    non deserunt...
                                </p>
                                <h3>€ 23,06</h3>
                            </div>
                            {/* SingleCard */}
                            <div className={Style.singleCard}>
                                <div className={Style.cardImage}>
                                    <img src='/Images/tyre.svg' style={{ width: "100%", height: "100%", objectFit: "contain" }} alt='tyre'></img>
                                </div>
                                <div className={Style.circle}>
                                    <img src='/Images/circle.svg' alt='check' />
                                </div>
                                <h1 className={Style.MainHeading} >
                                    Hankook
                                    DynaPro Off-Road
                                </h1>
                                <h5>This product:</h5>
                                <p>Technics EAH-AZ60E-K,
                                    Aurkcularies Amet minim mollit
                                    non deserunt...
                                </p>
                                <h3>€ 23,06</h3>
                            </div>


                        </div>

                    </div>
                    {/* *********** */}
                    {/* CardsPrice */}
                    {/* *************/}

                    <div className={Style.cardtxt}>
                        <div className={Style.PriceTxt}>
                            <div className={Style.check}>
                                <div className={Style.SingleCheck}>
                                    <input type="checkbox" />
                                    <p>Apple MacBook Pro 16" (2021) - Space Grey (Apple M1 Pro Chip / 1TB SSD / 16GB RAM) $3.399</p>
                                </div>
                                <div className={Style.SingleCheck}>
                                    <input type="checkbox" />
                                    <p>Apple Magic Mouse 2 $120</p>
                                </div>
                                <div className={Style.SingleCheck}>
                                    <input type="checkbox" />
                                    <p>Apple Magic Keyboard with Numeric Keypad - US English $189</p>
                                </div>
                            </div>
                            <div className={Style.priceBtn}>
                                <div>
                                    <p>Precio total: </p><span>€ 23,06</span>
                                </div>
                                <div className={Style.btn}>
                                    <button>
                                        Añadir los tres a la cesta
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BuyItWith