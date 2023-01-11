import React from 'react';
import style from "./Attractions.module.css"
import Attraction from "../../components/attraction/Attraction";

const Attractions = () => {

    const spaDescription = [
        'Oferuejmy ponad 20 roodzajów różnych zabiegów, w tym: masaż, peeling, zabieg nawilżający skórę i wiele innych',
        'Sauna: fińska, parowa, ziołowa',
        'Kawa/herbata dla klientów',
        'Relaksacyjna muzyka na żywo',
    ]

    const sportDescription = [
        '6 kortów tenisowych',
        'Boisko do piłki nożnej',
        'Bieżnia 100m',
        'Boisko do siatkówki plażowej',
    ]

    const nearbyDescription = [
        'Wesołe miasteczko',
        'Dzielnica pełna klimatycznych barów i restauracji',
        'Spacer starówką',
        'Sklepy uznanych światowych marek',
    ]

    return (
        <div>
            <div className={style.attraction}>
                <Attraction
                    img={'spa.jpg'}
                    title={'Spa'}
                    description={spaDescription}
                />
            </div>
            <div className={style.attraction}>
                <Attraction
                    img={'sport.jpg'}
                    title={'Sport i rekreacja'}
                    description={sportDescription}
                />
            </div>
            <div className={style.attraction}>
                <Attraction
                    img={'nearby.jpg'}
                    title={'W pobliżu hotelu'}
                    description={nearbyDescription}
                />
            </div>
        </div>
    );
};

export default Attractions;
