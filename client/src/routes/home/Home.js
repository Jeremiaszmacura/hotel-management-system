import React from 'react';
import style from "./Home.module.css"

const Home = () => {

    return (
        <div className={style.home}>
            <div className={style.title}>
                <h1>Witamy w Hotel Labs</h1>
            </div>
            <div className={style.homeContent}>
                <div className={style.photo}>
                    <img src={"images/hotel1.jpg"}/>
                </div>
                <div className={style.photo}>
                    <img src={"images/hotel2.jpg"}/>
                </div>
                <div className={style.photo}>
                    <img src={"images/hotel3.jpg"}/>
                </div>
            </div>
        </div>
    );
};

export default Home;
