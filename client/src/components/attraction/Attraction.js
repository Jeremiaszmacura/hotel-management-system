import style from './Attraction.module.css'

import React from 'react';

const Attraction = ({img, title, description}) => {
    return (
        <div className={style.content}>
            <div className={style.photo}>
                <img src={`images/${img}`}/>
            </div>
            <div className={style.description}>
                <h1>{title}</h1>
                <ul>
                    {
                        description.map(line => {
                            return(
                                <li>{line}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Attraction;
